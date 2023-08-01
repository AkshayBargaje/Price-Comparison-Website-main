import React, {useState} from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';


import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]


const PriceComparison = () => {
    const [search, setSearch] = useState('')
    const [isData, setIsdata] = useState(false)
    const [data, setData] = useState()
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          // Send a POST request to the back-end API endpoint using a proxy
          await axios.post('http://localhost:6969/api/compare-prices', { productName: search }).then((response) => {
              const data = response.data
              setData(data)
              setIsdata(true)
            });
        } catch (error) {
          console.error(error);
        }

};
  return (
    <div className="py-24 container">
        
        <form className="" onSubmit={handleSubmit}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
    </div>
</form>
     {(isData) ? <>
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Amazon Pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {/* Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum. */}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">{data.productName}</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {/* Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda. */}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              {/* <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4> */}
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                {/* <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p> */}
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">₹{data.amazonPrice}</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Rupee</span>
                </p>
                <Link to={data.amazonProductPageUrl}>
                <a
                  href={data.amazonProductPageUrl}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                  Visit
                </a>
                    </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  {/* Invoices and receipts available for easy company reimbursement */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Flipkart Pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {/* Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum. */}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">{data.productName}</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {/* Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda. */}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              {/* <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4> */}
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {/* {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))} */}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                {/* <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p> */}
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">₹{data.flipkartPrice}</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Rupee</span>
                </p>
                <Link to={data.flipkartProductPageUrl}>
                <a
                  href={data.flipkartProductPageUrl}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                  Visit
                </a>
                    </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  {/* Invoices and receipts available for easy company reimbursement */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </> : <>
     </>}
    </div>
  )
}

export default PriceComparison