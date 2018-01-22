# Survey app

Survey app is a simplified alternative to Google Forms app written with [React.js](http://facebook.github.io/react/index.html).

## Demo

Live demo: [survey-app.lengvenis.me](http://survey-app.lengvenis.me)

## Scripts

Webpack configuration is based on [create-react-app](https://github.com/facebookincubator/create-react-app) boilerplate.

Install dependencies using yarn or npm manager:

```js
yarn install
```

Start development version:

```js
yarn start
```

For building a production version use:

```js
yarn build
```

>Note: [survey-backend](https://github.com/RokasLeng/survey-app-backend) instance has to be running on `localhost:3001` for application to work.

## Design notes

### Folder structure ###

Due to a specific domain, reducers and actions are reused on different pages, therefore they are put to `src/reducers` and `src/actions` folder appropriately. In general domain/feature/page oriented component file structure is used:

* `actions` - actions and their tests
* `components` - organized by page and tests
* `config` - cofiguration files
* `constants` - action types and other constants
* `models` - normalizr models
* `reducers` - reducers and their tests
* `selectors` - selectors used to select domain objects from normalized data
* `styles` - css styles written using BEM and SCSS
* `utils` - global utils
        
More reasoning on folder structure: [The 100% correct way to structure a React app (or why there’s no such thing)](https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed) 


### CSS design ###

BEM methodology was used for writting CSS styles. CSS styles are located under `src/styles` folder. General structure is:

* `core` - css variables and reset
* `layouts` - reusable container layouts
* `modules` - reusable modules
* `pages` - page dependant styling

Plain BEM was used due to the fact that BEM methodology itself solves global namespacing and other issues. Styled-components is an option I will consider using in future app versions. 

More reasoning about CSS usage: [Stop using CSS in JavaScript for web development](https://medium.com/@gajus/stop-using-css-in-javascript-for-web-development-fa32fb873dcc)


### Unit tests ###

`src/setupTests.js` holds project test configuration. Technologies used:

* [enzyme](https://github.com/airbnb/enzyme) - a wrapper for React test utils
* [chai](https://github.com/chaijs/chai) - assertion library
* [mocha](https://github.com/mochajs/mocha) - a test framework
* [jsdom](https://github.com/tmpvar/jsdom) - a javascript DOM implementation 

Component functionality was tested with focus to regression vulnerable logic. One action creator and one reducer where tested for example purposes.

>Note: I have used `Mocha` instead of create-react-app native `Jest` due to `Jest` issues while using `jsdom` and rendering canvas related elements to DOM.

## Features log
| Feature | Status | References |
|:---|:---|:---|
| JWT authentification using Passport.js | DONE | [www.passportjs.org](http://www.passportjs.org/),  [jwt.io](https://jwt.io/)  |
| BEM for CSS | DONE | [getbem.com](http://getbem.com/) |
| Redux-form and validation | DONE | [github.com/erikras/redux-form](https://github.com/erikras/redux-form) |
| Data normalization | DONE | [github.com/paularmstrong/normalizr](https://github.com/paularmstrong/normalizr) |
| Fetch for API calls | DONE | [github.com/github/fetch](https://github.com/github/fetch) |
| Async/await presets | DONE | [Mdn async_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) |
| Router v4  | DONE | [github.com/ReactTraining/react-router](https://github.com/ReactTraining/react-router)|
| Usage of selectors | DONE | [Computing Derived Data](https://redux.js.org/docs/recipes/ComputingDerivedData.html) |
| Mobile version | DONE | |
| Unit tests | DONE | |
| Error handling | DONE | |
