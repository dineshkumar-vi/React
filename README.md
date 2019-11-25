# React Reference App

The file used to help user to understand information on how to clone React sample application files, install dependencies and launch the React Reference app.

Once you've done that, this document is intended to give you a taste of how `React App` works. It still assumes basic knowledge of React, Redux and `react-router`. **If you're completely new to React, please refer to https://reactjs.org/community/starter-kits.html instead!**

## Tech Stack

Here's a list of packages that you should be at least familiar with before starting your project. However, the best way to see a complete list of the dependencies is to check package.json

### Core

- [ ] [React](https://facebook.github.io/react/)
- [ ] [React Router](https://github.com/ReactTraining/react-router)
- [ ] [Redux](http://redux.js.org/)
- [ ] [Redux Saga](https://redux-saga.github.io/redux-saga/)
- [ ] [Reselect](https://github.com/reactjs/reselect)
- [ ] [graphql](https://graphql.org/)
- [ ] [apollo-client](https://www.apollographql.com/docs/react/)
- [ ] [express](https://expressjs.com/)
- [ ] [newrelic](https://newrelic.com/)


### Unit Testing

- [ ] [Jest](http://facebook.github.io/jest/)
- [ ] [Enzyme](http://airbnb.io/enzyme/)

### Linting

- [ ] [ESLint](http://eslint.org/)
- [ ] [Prettier](https://prettier.io/)
- [ ] [stylelint](https://stylelint.io/)

### AODA

- [ ] [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [ ] [react-axe](https://github.com/dequelabs/react-axe)


## Project Structure

Let's start with understanding why we have chosen our particular structure.

In any case, here's the TL;DR:

- src folder containes all react / redux releated components and containers.
- html folder contains all html components and containers and scss configuration with minimal boostarp
- Jenkins folders contains CI/CD pipline configurations.
- The `webpack` folder contains development and production server configuration files.

### `src/`

We use the [container/component architecture](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.4rmjqneiw). `containers/` contains React components which are connected to the redux store. `components/` contains dumb React components which depend on containers for data. **Container components care about how things work, while components care about how things look.**

### `webpack/`

Source code cannot be executed as-is in the web browser. It needs to pass through webpack to get converted into a version of Javascript that web browsers understand. While it's certainly helpful to understand what's happening here.
You'll most probably use ECMAScript 6 or ECMAScript 7 to write the source code of your app. webpack takes care of making it compatible with a majority of browsers.

> ([ECMAScript](http://stackoverflow.com/a/33748400/5241520) is the standard for JavaScript. Most people are still using browsers which understand ECMAScript 5.

- `mocks/`: This folder contains mocks which Jest uses when testing your app.

### `server.js/`

This file containes express server configuration and its used for production environment .


### `server-html.js/`

This file containes express server configuration and its used for html local service devlopment.


### How does the application boot up?

Like any other webpage your app starts with the [`public/index.html`] file. React will render your application into `div#app` .

But how do we include all of your react components into a single HTML file? That's where webpack comes into the picture. webpack will literally pack your application into small javascript files. These files will be injected into the `index.html` as `<script>` tags.

When your application is deployed on a server, browsers will load this HTML file. The Javascript files that webpack has included will be executed by the browser, thereby booting up your React application!

### `src/index.js`:

When you run `npm start`, a server will be launched in your terminal for development. You can then open [http://localhost:3000](http://localhost:3000) to access the server and see your app.

Webpack requires an entry point to your application. Think of it as a door to your source code. In this boilerplate [`src/index.js`] is that entry point. Webpack will access the entire app from this file, Only the required chunks will be loaded in the browser so that you don't have to worry about the size of your application.

`src/app.js` is one of the biggest files of the boilerplate. It contains all the global setup to make sure your app runs smoothly.

- `@babel/polyfill` is imported. This enables cool stuff like generator functions, `Promise`s, etc.
- A redux `store` is instantiated.
- `ReactDOM.render()` not only renders the [root react component called `<App />`, of your application, but it renders it with `<Provider />`,  `<BrowserRouter />`.
- Hot module replacement is set up that makes all the reducers, injected sagas, components, containers, and AEM messages hot reloadable.
- AEM internationalization support setup.
* `<Provider />` connects your app with the redux `store`.


### Redux

Redux is going to play a huge role in your application.

The Redux `store` is the heart of your application. Check out [`/src/Store/Store.js`] to see how we have configured the store.

The store is created with the `createStore()` factory, which accepts three parameters.

1.  **Root reducer:** A master reducer combining all your reducers.
2.  **Initial state:** The initial state of your app as determined by your reducers.
3.  **Middleware/enhancers:** Middlewares are third party libraries which intercept each redux action dispatched to the redux store and then... do stuff. For example, if you install the [`redux-logger`](https://github.com/evgenyrodionov/redux-logger) middleware, it will listen to all the actions being dispatched to the store and print previous and next state in the browser console. It's helpful to track what happens in your app.

In our application we are using two such middleware.

1.  **Redux saga:** Used for managing _side-effects_ such as dispatching actions asynchronously or accessing browser data.


### Reselect

Reselect is a library used for slicing your redux state and providing only the relevant sub-tree to a react component. It has three key features:

1.  Computational power
2.  Memoization
3.  Composability

Imagine an application that shows a list of users. Its redux state tree stores an array of usernames with signatures:

`{ id: number, username: string, gender: string, age: number }`.

Let's see how the three features of reselect help.

- **Computation:** While performing a search operation, reselect will filter the original array and return only matching usernames. Redux state does not have to store a separate array of filtered usernames.
- **Memoization:** A selector will not compute a new result unless one of its arguments change. That means, if you are repeating the same search once again, reselect will not filter the array over and over. It will just return the previously computed, and subsequently cached, result. Reselect compares the old and the new arguments and then decides whether to compute again or return the cached result.
- **Composability:** You can combine multiple selectors. For example, one selector can filter usernames according to a search key and another selector can filter the already filtered array according to gender. One more selector can further filter according to age. You combine these selectors by using `createSelector()`

### Redux Saga

Redux Saga used to interact with apollo client and fetch back-end application data

Imagine that your application is fetching data in json format from a back-end. For every API call, ideally you should define at least three kinds of [action creators]

1.  `API_REQUEST`: Upon dispatching this, your application should show a spinner to let the user know that something's happening.
2.  `API_SUCCESS`: Upon dispatching this, your application should show the data to the user.
3.  `API_FAILURE`: Upon dispatching this, your application should show an error message to the user.

### Apollo Client

Apollo Client mainly used to interact with Graphql endpoints and fetch the API response .

### Apollo/Query.Js

Contains all the query details in application level.

### Apollo/Mutation.Js

Contains all the mutation details in application level.

### Apollo/Services.Js

Promised client will interact with graphql enpoints with needed query parameters.


### Linting

This boilerplate includes a complete static code analysis setup. It's composed of [ESLint](http://eslint.org/), [stylelint](https://stylelint.io/), and [Prettier](https://prettier.io/).

We recommend that you install the relevant IDE extensions for each one of these tools. Once you do, every time you'll press save, all your code will be formatted and reviewed for quality automatically.


#### `<Main />`

Run `npm start` to launch the application. If you start browsing at [https://localhost:3000](https://localhost:3000), by default you will be navigated to the home page. Here, notice that route is `"/"`, so the [`<Main />`]
