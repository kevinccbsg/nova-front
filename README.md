# nova-front

Nova Front challenge. This is a React APP, that uses TS, i18next, react-router-dom, SASS, react-tostify, and cypress. As I don't want to add a lot of complexity I did not include an state managment (Mobx, redux...).

This is a preview of the app, which was designed with a mobile first approach.

**Mobile**

![nova mobile](https://github.com/kevinccbsg/nova-front/blob/main/images/mobile.png "nova mobile")
![nova nominations mobile](https://github.com/kevinccbsg/nova-front/blob/main/images/nominations.png "nova nominations mobile")

**Desktop**

![nova desktop](https://github.com/kevinccbsg/nova-front/blob/main/images/desktop.png "nova desktop")
![nova nominations desktop](https://github.com/kevinccbsg/nova-front/blob/main/images/nominations_desktop.png "nova nominations desktop")

## How to collaborate

If you want to collaborate you need Node.js ([.npmrc version](https://github.com/kevinccbsg/nova-front/blob/main/.nvmrc)).

Install dependencies

```
npm install
```

This is the project structure

```
routes.tsx
index
cypress
src
├───components
├───constants
├───layouts
├───locales
├───pages
├───repository
├───styles
├───validatorss
```

If you want to run in local you can execute:

```
npm run dev
```

We really recommend to run both cypress and the app while you are developing because you can handle API requests while you are working in the project. You can use this command to do this:

```
npm run test:dev
```

In case you don't know how to use cypress you can execute in your local machine with these commands, and env variables.

.env
```
API_URL=http://localhost:4000
```

You can use the [Backend service](https://github.com/kevinccbsg/nova-api). If you download the backend service we recommend to run the API in a new port (4000). Or you can point to the [development environment](https://nova-challenge-api.herokuapp.com/api-docs). However, we do not recommend those options, and we encourague you to use cypress.
