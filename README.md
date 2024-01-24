# 💜 🦊 wefox around the world

This project is a web app builded in **React** which must runs locally the given API using docker-compose and list, show, create, update and remove the resource comming from the Dockerized API.

<image src="src/assets/Homepage.png">

---
## 🗂️ Content

- [💜 🦊 wefox around the world](#--wefox-around-the-world)
  - [🗂️ Content](#️-content)
  - [🚀 How to run the App.](#-how-to-run-the-app)
    - [Pre-requeriments](#pre-requeriments)
    - [➡️ Launch the backend and the frontend](#️-launch-the-backend-and-the-frontend)
  - [🌐 View the App deployed in Netlify.](#-view-the-app-deployed-in-netlify)
  - [🧪 How to run the Tests.](#-how-to-run-the-tests)
  - [🧱 Project structure](#-project-structure)
  - [⚒️ Process](#️-process)
    - [✳️ Create a React Project](#️-create-a-react-project)
    - [✳️ Run locally the API using docker-compose](#️-run-locally-the-api-using-docker-compose)
    - [✳️ Using React Hooks](#️-using-react-hooks)
    - [✳️ React Router](#️-react-router)
    - [✳️ TypeScript](#️-typescript)
    - [✳️ Material UI](#️-material-ui)
    - [✳️ Showing a map](#️-showing-a-map)
    - [✳️ Testing with React Testing Library](#️-testing-with-react-testing-library)
    - [✳️ Testing with cypress](#️-testing-with-cypress)
  - [💪 Possible improvements](#-possible-improvements)
  - [👩‍💻 Author](#-author)
***

## 🚀 How to run the App.

### Pre-requeriments

> [!IMPORTANT]
> You need to have [```Node```](https://nodejs.org/es/) and [```Docker```](https://www.docker.com/) previously installed in your computer.


To start using this project, clone this repo into a new directory and move inside it.
> ```console
>  $ git clone https://github.com/conchaasensio/wefox-frontend-challenge.git
>  $ cd wefox-frontend-challenge
> ```

### ➡️ Launch the backend and the frontend

To run the backend introduce this command in your terminal to run the server:
> ```console
> $ docker compose up
> ```

You have to install the frontend dependencies.
> ```console
> $ npm install
> ```

Run the frontend app.
> ```console
> $ npm start
> ```

Navigate to the frontend

👉 Open http://localhost:3006 to view in the browser
***

## 🌐 View the App deployed in Netlify.

> [!WARNING]
> The backend is not deployed so you need to run the backend locally.

> ```console
> $ docker compose up
> ```

Should you like to take a look to the deployed app, [here you have the link](https://wefox-challenge-concha.netlify.app/).
***


## 🧪 How to run the Tests.


Finally, to run the tests you need to introduce the following commands on your terminal:
```console
$ npm test
```

To run the cypress tests use this command:
```console
$ npm run cypress:open
```
***

## 🧱 Project structure

```
/
|
|– cypress
|– src
|  |– components
|     |– tests
| |– styles
| |– types
| |– App
| |– Index
```
***

## ⚒️ Process

### ✳️ Create a React Project

The first decision I hade to make was how to start a React project. Nowadays we have different options to do so: Create React App, Next.js, or configuring it using Vite or Webpack.

Although it is recommended to choose Next.js over Create React App (you can read more about this topic in [this link](https://react.dev/learn/start-a-new-react-project)), I finally decided to use Create React App because I have never worked wit Next.js before. Given the short deadeline to deliver the test, in practical terms, I decided to work with something that I had used before.

### ✳️ Run locally the API using docker-compose

It was the second time that I configured docker-compose by myself, but it was easy following the instructions given by wefox. I was provided with a pre-built image that includes the server API and the details of how to run the API server.

### ✳️ Using React Hooks

I have build this app using functional components from React. As you could see, I have used the hooks ```useState``` and ```useEffect```, linked to the component´s state and life cycle; as well as ```useParams``` and ```useNavigate``` linked to React Router.

### ✳️ React Router

This was one of the challenges that I had to face because, even though I have used React Router several times, it was the first time that I used the version 6, which is quite different.

You could see in [**App.tsx** file](src/App.tsx) that App component is contained within another component, named *BrowserRouter*. This is because I have used [**React Router**](https://reactrouter.com/) to specify the routes in the app using my React components.

Once the routes are declared, I can link the different components using both *Link* and *useNavigate*.

### ✳️ TypeScript

I was not used to working with TypeScript, so it has been quite challenging develop this app by facing the different and multiple error messages that emerged.

### ✳️ Material UI

Although I used SASS and BEM in previous projects, this time I decided to try to work with [**Material UI**](https://mui.com/) because I think it is really used in lot of projects and I wanted to test it. Furthermore, I assumed that it was going to help me so much with the UI and that I was going to be able to go faster. I am not completely sure about the latter, but at least I have learnt something new.

### ✳️ Showing a map

It had the chance to play with lat/long data in order to paint a map.

### ✳️ Testing with React Testing Library

I am really interested in all that having to do with clean code and best practices. Testing is something that I keep learning. Although I am not an "advanced user" regarding this practice, I wanted to try to put it into practice during this exercise. I have included [tests files](/src/components/tests) for the components, using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### ✳️ Testing with cypress

I also wanted to include some integration tests using [cypress](https://www.cypress.io/). You can find them under the [cypress folder](cypress) in the project.
***

## 💪 Possible improvements

+ Create a service to group all the API calls.
+ Add more tests.
+ Dockerize the client.
+ Deploy the backend and link it with the frontend deployed in Netlify.
***

## 👩‍💻 Author

This App has been developed by [**Concha Asensio**](https://www.linkedin.com/in/conchaasensio/).
