# Weather 🚀

An MVP of a single page web application built on Vue & Nuxt that fetches and displays the weather conditions for different suburbs around Australia and some other countries. Some sorting/filtering of the weather data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [Node.js](https://nodejs.org/en/): JavaScript run-time and main development language.
- [npm](https://www.npmjs.com/get-npm): Node.js package manager.

Make sure you have Node version 12 and above installed to check for which version you're on, open your terminal and type

```
node --version
```


### Installing

A step by step series of examples that tell you how to get the app starting on your local machine

Clone the repo by clicking the code button on the right hand side or go to the directory of your choice and clone it with the git clone command

```bash
$ git clone git@github.com:NickSolante/weatherchallenge.git
cd weatherchallenge
```

once you've done that install all of the dependecies by

```bash
$ npm i
# Start application
$ npm run dev
# By default if nothing is running on the machine it will come out on localhost:3000
```

![Screen Shot 2020-07-10 at 9 39 41 am](https://user-images.githubusercontent.com/41457938/87101030-4dd3e400-c291-11ea-830f-d3a562c8e834.png)


## Running the tests

To run tests on your machine 

```
$ npm run lint && npm run test
```

### Break down into end to end tests

let me explain the tests that we ran

```
$ npm run lint
```
npm run lint is for linting and knowing that the code follows the format specified by the developer

```
$ npm run test
```

npm run test runs test scripts with jest


## Built With

* [Nuxt](https://nuxtjs.org/guide/) - The web framework used
* [npm](https://docs.npmjs.com/about-npm/) - Package Management
