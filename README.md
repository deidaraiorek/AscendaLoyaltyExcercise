# AscendaLoyaltyExcercise
# README

## Introduction
This project consists of three files: offer.js, response.js and test.js. The purpose of the offer.js file is to build a class that filters offers based on the customer's check-in date and the API response.

The purpose of the response.js file is to handle the API response and extract the relevant information about the offers, such as the offer's id, title, description, category,merchant information, and valid date.

The purpose of the test.js file is to write unit tests for the ofer.js class to verify its functionality and ensure that it is working correctly. The tests cover the different cases and scenarios that the class may encounter and verify that the class filters the offers as expected and returns the correct modified response.

## Requisites
* Node.js
* npm
* Jest

## Installation

1. Clone the repository to your local machine using the following command:
* git clone https://github.com/deidaraiorek/AscendaLoyaltyExcercise

2. Navigate to the cloned repository and install the required dependencies: 
* Install Node.js through https://nodejs.org/en/download/
* Install Jest through the command: npm install -g jest

3. To run the code, you can use the following command:
* node offer.js <br>
(please note the file has no input and output; therefore, in order to run this file alone, you can uncomment from line 61 to 70 to test the result of the Offer class in case the check-in date is "2019-12-25")

## Testing
The code is tested using Jest. To run the tests, you can use the following command:
npm run test
or
npx jest
or 
jest ( if you installedest globally)

