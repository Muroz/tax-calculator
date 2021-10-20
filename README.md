# Tax Calculator

This project currently addressed the tax calculator assignment (level 1).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It works with the following endpoint by default `http://localhost:5000/tax-calculator/brackets/` to fetch bracket data. However, any endpoint can be passed as .env
argument under the following name `REACT_APP_BRACKET_DATA_ENDPOINT`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Remaining TODOs

Due to lack of time I was unable to put everything I initially wanted, so here is a list of some features I was planning on adding:

- Adding extra unit tests. Specifically for the `App.tsx` to check that given a salary it calculates the taxes properly
- Create a theme file to hold size, spacing and color variables
- Ensure the app follows good accessibility throughout
- Dockerize the application 
- Add a proper loading state and better user feedback for cases where the fetching fails