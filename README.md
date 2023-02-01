# AscendaLoyaltyExcercise
# README

## Introduction
This project consists of three files: offer.js, response.js and test.js. The purpose of the offer.js file is to build a class that filters offers based on the customer's check-in date and the API response. The class takes two arguments: the API response and the customer's check-in date.

The purpose of the response.js file is to handle the API response and extract the relevant information about the offers, such as the offer's id, title, description, category,merchant information, and valid date.

The purpose of the test.js file is to write unit tests for the ofer.js class to verify its functionality and ensure that it is working correctly. The tests should cover the different cases and scenarios that the class may encounter, such as invalid offers, offers from multiple merchants, and offers from the same category, and verify that the class filters the offers as expected and returns the correct modified response.

## Requisites
* Node.js
* npm
* Jest

## Installation

1. Clone the repository to your local machine using the following command:
* git clone https://github.com/deidaraiorek/AscendaLoyaltyExcercise

2. Navigate to the cloned repository and run the following command to install the required dependencies: 
npm install

3. To run the code, you can use the following command:
* node offer.js
* node response.js

## Testing
The code is tested using Jest. To run the tests, you can use the following command:
npm run test
or
npx jest
or 
jest ( if you installedest globally)

