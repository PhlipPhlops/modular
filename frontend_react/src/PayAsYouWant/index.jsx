// import { Client, Environment } from 'square';
const { ApiError, Client, Environment } = require('square');

const client = new Client({
  timeout:3000,
  environment: Environment.Sandbox,
  accessToken: 'EAAAEO5rFJnShTUTf43hyfE_wbs5EZPAYmt9h5MRVpvxWOyftxnTClWZSB7Vn-gn',
})

// Get an instance of the Square api's to call
const { paymentsApi, locationsApi, customersApi } = client;

const getLocations = async () => {
  locationsApi.listLocations()
    .then(response => {
      let firstLocation = response.result.locations[0];
      console.log("First location is: ", firstLocation);
    })
    .catch(error => {
      if (error instanceof ApiError) {
        console.log('There was an error in your resuest: ', error.errors);
      } else {
        console.log("Unexpected Error: ", error);
      }
    });
}

const pay = async() => {
  let bodyAmountMoney = {
    amount: 200,
    currency: 'USD',
  }

  let body = {
    sourceId: 'ccof:uIbfJXhXETSP197M3GB',
    idempotencyKey: '4935a656-a929-4792-b97c-8848be85c27c',
    amountMoney: bodyAmountMoney,
  }
  body.customerId = 'VDKXEEKPJN48QDG3BGGFAK05P8';
  body.locationId = 'L7DFX1PXD1NY4';
  body.referenceId = '123456';
  body.note = 'Brief description';
  
  try {
    const { result, ...httpResponse } = await paymentsApi.createPayment(body);
    console.log(result);
  } catch(error) {
    console.log(error);
  }
}

const createCustomer = async() => {
  const body = {
    givenName: 'Phillip Provo'
  }
  customersApi.createCustomer(body)
    .then((result, httpResponse) => {
      console.log(httpResponse);
    })
    .catch((error) => {
      console.log(error);
    });
}

const listCustomers = async() => {
  customersApi.listCustomers()
    .then((result, httpResponse) => {
      console.log(result.result.customers);
    })
    .catch((error) => {
      console.log(error);
    });
}

listCustomers();
