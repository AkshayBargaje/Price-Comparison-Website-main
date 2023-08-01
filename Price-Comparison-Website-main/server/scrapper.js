const axios = require('axios');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akshaybargaje56@gmail.com',
    pass: 'nlfsgzdxvuznaifd'
  }
});

function sendNotification(productUrl, price, email) {
  const mailOptions = {
    from: 'akshaybargaje56@gmail.com',
    to: email,
    subject: 'Price dropped below threshold!🔥',
    html: `
      <h2>Price dropped below threshold!</h2>
      <p>The price of <a href="${productUrl}">${productUrl}</a> has dropped below the threshold.</p>
      <p>The current price is ${price}.</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

function checkPrice(productUrl, threshold, email) {
  axios.get(productUrl)
    .then(response => {
      const $ = cheerio.load(response.data);
      const title = $('#productTitle').text().trim();
      const price = $('.priceToPay .a-offscreen').text().replace(/[^0-9.]/g, '');
      console.log(price, threshold)
      if (price < threshold) {
        sendNotification(productUrl, price, email);
      }

      console.log(title);
      console.log(`Current price: ${price}`);
    })
    .catch(error => {
      console.log(error);
    });
}

module.exports = { checkPrice, sendNotification };


