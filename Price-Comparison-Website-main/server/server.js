const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
var cors = require("cors");
const app = express();
const port = 6969;

const { checkPrice, sendNotification } = require('./scrapper');

app.use(express.json());
app.use('*', cors());

app.post('/api/track-price', (req, res) => {
  const productUrl = req.body.productUrl;
  const productThresholdPrice = req.body.productThresholdPrice ;
  const email = req.body.email ;

  // Call the checkPrice function with the provided URL
  checkPrice(productUrl, productThresholdPrice, email)

  // Send a response to the client
  res.send('Price tracking started for ' + productUrl);
});

app.post('/api/compare-prices', async (req, res) => {
    const productName = req.body.productName;
  
    // Amazon
    const amazonUrl = `https://www.amazon.in/s?k=${productName}`;
    let amazonPrice = -1;
    let amazonProductPageUrl = ''
  
    try {
      const response = await axios.get(amazonUrl);
      const html = response.data;
      const $ = cheerio.load(html);
  
      const productUrl = $('.a-size-mini .a-link-normal').first().attr('href');
    //   console.log(productUrl)
      const productPageUrl = `https://www.amazon.in${productUrl}`;
      amazonProductPageUrl = productPageUrl
  
      const productResponse = await axios.get(productPageUrl);
      const productHtml = productResponse.data;
      const productPage$ = cheerio.load(productHtml);
  
      amazonPrice = parseInt(productPage$('.priceToPay .a-offscreen').text().replace(/[^0-9]/g, ''));
    } catch (error) {
      console.log(error);
    }
  
    // Flipkart
    const flipkartUrl = `https://www.flipkart.com/search?q=${productName}`;
    let flipkartPrice = -1;
    let flipkartProductPageUrl = ''
  
    try {
      const response = await axios.get(flipkartUrl);
      const html = response.data;
      const $ = cheerio.load(html);
  
      const productUrl = $('a[class="_1fQZEK"]').first().attr('href');
      const productPageUrl = `https://www.flipkart.com${productUrl}`;
      flipkartProductPageUrl = productPageUrl
  
      const productResponse = await axios.get(productPageUrl);
      const productHtml = productResponse.data;
      const productPage$ = cheerio.load(productHtml);
  
      flipkartPrice = parseInt(productPage$('div[class="_30jeq3 _16Jk6d"]').text().replace(/[^0-9]/g, ''));
    } catch (error) {
      console.log(error);
    }
  
    // Response
    const data = {
      productName: productName,
      amazonPrice: amazonPrice,
      flipkartPrice: flipkartPrice,
      amazonProductPageUrl,
      flipkartProductPageUrl
    };
  
    res.json(data);
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});