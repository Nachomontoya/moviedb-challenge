# TMDB Challenge

TMDB Challenge is a Frontend web application developed with React, Redux and
Typescript.

The main objective of this application is to create an app that consumes
[The Movie Database](https://www.themoviedb.org/) API and renders, at home page,
the first page of popular movies and TV Shows. At this page, you will be able to
choose one of those sections and see their content. The cards that will be
rendered, will show you the poster of the movie or show, its name and the vote
average it has.

When you click on one of those cards, the app will redirect you to the Details
page. There, you'll be able to see more info of the content chosen. On this
page, you will see the poster on a bigger size, the title, the genres, the vote
average and an overview. Also, at the bottom of this content, you will see the
movies or shows related to the one selected.

On the header, you will have the option to choose between dark or light mode.

> You can see this project deployed at [this URL](https://tmdb.nachomontoya.es/)
> or [this one](https://tmdb-nachomontoya.herokuapp.com/)

- [TMDB Challenge](#tmdb-challenge)
  - [🚀 How to run the app.](#-how-to-run-the-app)
    - [📋 Requirements](#-requirements)
    - [⚙️ Installation](#️-installation)
  - [🗂 Folder structure](#-folder-structure)
  - [💊 How to run the test suite](#-how-to-run-the-test-suite)
  - [🛠️ Main Features](#️-main-features)
  - [🛫 Deploys](#-deploys)
  - [🕵️‍♂️ Technologies used](#️️-technologies-used)

## 🚀 How to run the app.

By following next steps you will get a copy of this project and will be able to
run it locally for development or test purposes.

### 📋 Requirements

You will be using [ReactJS](https://es.reactjs.org/),
[Yarn](https://yarnpkg.com/) and [Typescript](https://www.typescriptlang.org/)
so if you don't have them already installed on your computer you will need to do
it before start. To install Yarn globally on your computer you should type:
`npm install --global yarn`

In order to be able to make requests to The Movie Database API you will have to
log in or create an account at [TMDB](https://www.themoviedb.org/)

### ⚙️ Installation

First, you will need to `clone` or `fork` this repo into your Github account:

<img src="https://docs.github.com/assets/images/help/repository/fork_button.jpg" alt="Fork on GitHub" width='450'>

`$ git clone https://github.com/Nachomontoya/moviedb-challenge.git`

Then run `yarn install` in the root folder of the project.

When you have all the dependencies installed you will need to create one `.env`
file located at root folder with the next content:

```
REACT_APP_TMDB_API_ROUTE=https://api.themoviedb.org/3
REACT_APP_TMDB_API_TOKEN={Your moviedb API token}
```

## 🗂 Folder structure

<pre>  
└───root
    ├───public
    └───src
        ├───__test__
        ├───api		<i>//Calls to TMDB API </i>
        ├───components
        ├───constants
        ├───pages
        ├───redux
        └───utils		<i>// Reusable code </i>
</pre>

## 💊 How to run the test suite

There have been set tests to check some components and the pages to render
properly.

To run these tests you will have to type on the root of the project:

```
$	yarn test
```

## 🛠️ Main Features

This app has been developed using React and Typescript as main technologies. But
they are not the only ones.

To make all the requests to the api, I have used
[axios](https://axios-http.com/docs/intro). Regarding the errors that the calls
to the api can possibly appear I have used
[React Toastify](https://www.npmjs.com/package/react-toastify). This way, the
user can get the error in a more friendly way.

There is a global state to persist the mode you have selected on the header
(dark/light), to get this done, I have used [Redux](https://redux.js.org/).

To navigate between pages I have used [React Router](https://reactrouter.com/).

[Bootstrap](https://getbootstrap.com/) framework has been used to easily manage
sizing and grid. In order to stylize the application I have used
[Sass](https://sass-lang.com/) and to create the animations
[Framer Motion](https://www.framer.com/motion/).

## 🛫 Deploys

As you saw at the beginning of this repo. There are two deploys of this app.

Personal Domain =>
[https://tmdb.nachomontoya.es/](https://tmdb.nachomontoya.es/) Heroku =>
[https://tmdb-nachomontoya.herokuapp.com/](https://tmdb-nachomontoya.herokuapp.com/)

The purpose of this is to deploy using two different tools. To deploy on the
Personal Domain I have used the script `yarn build` that the command
`yarn create react-app` automatically creates and upload the build folder to the
server using [FileZilla](https://filezilla-project.org/). To deploy on Heroku I
have connected the Heroku app I created on my Heroku profile to this Github
repository and configured it to make automatic deploys everytime I make a push
on the main branch.

## 🕵️‍♂️ Technologies used

- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/es-ES/)
- [React](https://es.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [React Helmet Async](https://www.npmjs.com/package/react-helmet-async)
- [Bootstrap](https://getbootstrap.com/)
- [Sass](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org/)
