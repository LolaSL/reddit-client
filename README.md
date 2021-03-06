# reddit-client

Reddit Client appliication (minimalist version)
This project is a Reddit/Hacker News clone using HTML, Javascript and CSS .
It uses the Reddit API to get the content. It serves as an example project to get more practice in the various techniques and frameworks that have been used.This site is built for desktop and supports some mobile version screens.

## Table of contents

### Overview

The challenge
This project had the following requirements:

#### Build the application using React and Redux

#### Version control application with Git and host the repository on GitHub

#### Use a project management tool (GitHub Projects, Trello, etc.) to plan  work

#### Write a README (using Markdown) that documents your project including:

#### Write unit tests for components using Jest and Enzyme

#### Users can use the application on any device (desktop to mobile)

#### Users can use the application on any modern browser

#### Users can access application at a URL

#### Users see an initial view of the data when first visiting the app

#### Users can search the data using terms

#### Users can filter the data based on categories that are predefined

#### Users are shown a detail view (modal or new page/route) when they select an item

#### Users are delighted with a cohesive design system

#### Users are delighted with animations and transitions

#### Users are able to leave an error state


### Link
https://reddit-client-mini.netlify.app


### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Technologies Used

#### React
#### Redux Toolkit
#### Redux
#### Reddit API
#### Git and GitHub
#### Jest
#### React Testing Library
#### Command line and file navigation


### Features

#### This reddit client offers a modern layout that is accessible from mobile and desktop devices with modern browsers. The application is implemented as a single page app (SPA), being based on React.

#### The user can choose from 25 predefined subreddits of varying categories. For each subreddit, the latest  posts are displayed. The displayed post content contains meta data like a title, the author, the publishing data, comments and upvotes aswell as the actual content in either textual form (displayed with a markdown renderer) or a picture, video or link.

#### It is possible to filter the posts of a subreddit with the given search box. By clicking on the title of a post, the post can be displayed in a focused modal view. Clicking the up - or downvote button simulates submitting a vote for the respective post (Since the Reddit API is read-only, no votes are actually submitted). Clicking the comments icon opens a selection of user comments for the respective post.

#### The user can open button Dashboard which includes an option to reach a few websites such as Github (relevant project repository), Linkedin (project author profile) and Reddit; button Login has an option to login user to application.

#### Login form is modal form with inputs for each field (name, email and password) and the button Submit wich submites user data. When user submites data user's name is appeared near buttom Logout.

#### The button Logout is logouts the user.

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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

<!-- Please make sure to update tests as appropriate. -->

## License

[MIT](https://choosealicense.com/licenses/mit/)
