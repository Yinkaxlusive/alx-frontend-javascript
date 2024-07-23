# ALX Frontend JavaScript

This repository contains JavaScript projects for the ALX Software Engineering program. 

## Project: 0x01-ES6_promise

### Description

This project covers the basics of Promises in ES6 JavaScript.

### Setup

To set up the project, follow these steps:

1. Install NodeJS 12.11.x
2. Clone this repository
3. Run `npm install` to install dependencies
4. Use `npm run dev` to run the development server

### Files

- `0-promise.js`: Contains the `getResponseFromAPI` function that returns a Promise.
- `0-main.js`: Demonstrates the usage of `getResponseFromAPI`.
- `1-promise.js`: Contains the `getFullResponseFromAPI` function that returns a Promise based on a boolean input.
- `1-main.js`: Demonstrates the usage of `getFullResponseFromAPI`.
- `2-then.js`: Contains the `handleResponseFromAPI` function that attaches handlers to a given Promise.
- `2-main.js`: Demonstrates the usage of `handleResponseFromAPI`.
- `3-all.js`: Contains the `handleProfileSignup` function that handles multiple promises and logs the results.
- `3-main.js`: Demonstrates the usage of `handleProfileSignup`.
- `4-user-promise.js`: Contains the `signUpUser` function that returns a resolved promise with the given object.
- `4-main.js`: Demonstrates the usage of `signUpUser`.
- `5-photo-reject.js`: Contains the `uploadPhoto` function that returns a rejected promise with an error message.
- `5-main.js`: Demonstrates the usage of `uploadPhoto`.
- `6-final-user.js`: Contains the `handleProfileSignup` function that handles multiple promises and returns their status and values.
- `6-main.js`: Demonstrates the usage of `handleProfileSignup`.
- `7-load_balancer.js`: Contains the `loadBalancer` function that returns the value of the first resolved promise.
- `7-main.js`: Demonstrates the usage of `loadBalancer`.
- `8-try.js`: Contains the `divideFunction` that throws an error when attempting to divide by zero.
- `8-main.js`: Demonstrates the usage of `divideFunction`.
- `9-try.js`: Contains the `guardrail` function that handles the execution of a function and appends results to an array.
- `9-main.js`: Demonstrates the usage of `guardrail`.
- `100-await.js`: Contains the `asyncUploadUser` function that calls `uploadPhoto` and `createUser` concurrently.
- `100-main.js`: Demonstrates the usage of `asyncUploadUser`.
- `utils.js`: Utility functions for photo upload and user creation.
- `.eslintrc.js`: ESLint configuration file.
- `babel.config.js`: Babel configuration file.

### Testing

To run tests, use the command:

```sh
npm run test

