<h1 align="center">
  <a href="https://github.com/theTrackSuitDev/webDevsVault">
    <img src="https://prikachi.net/images/2024/08/07/Screenshot-from-2024-08-07-02-58-088bfec93cdcb34d67.png" alt="Logo" width="200" height="49">
  </a>
</h1>

<div align="center">
  A treasury of useful resources for web developers, from web developers.

  <a href="https://github.com/theTrackSuitDev/webDevsVault/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  ·
  <a href="https://github.com/theTrackSuitDev/webDevsVault/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  ·
  <a href="https://github.com/theTrackSuitDev/webDevsVault/discussions">Ask a Question</a>
</div>

<div align="center">


[![license](https://img.shields.io/github/license/theTrackSuitDev/webDevsVault.svg?style=flat-square)](LICENSE)

</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [App Usage](#app-usage)
- [Source code structure](#source-code-structure)
- [Known issues and limitations](#known-issues)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [Acknowledgements](#acknowledgements)

</details>

---

## About

<table>
<tr>
<td>

The WebDevs Vault is a student project. A Vault for useful resources that can help web developers. It's a single page web application built as a course project during the React course at the SoftUni academy in June/July/August 2024. The app has educational and demo purposes only. It solely aims to showcase the learnt techniques in using the React library to build interactive web applications.

The use-case concept behind the application is to provide a platform where both inexperienced and veteran developers can share and find well structured and helpful resources like tutorials, videos, articles and all kinds of tips and tricks about web development. The WebDevs Vaults also aims to save the time of looking for quality resources by offering a treasury of materials already checked and recommended by other developers. The app can serve as a go-to source of knowledge for both students who struggle to find good tutorials and experienced devs who want to find something useful or share already used and proven to be helpful resources. Lastly, the application would facilitate users to get and leave feedback about the shared resources thanks to its bookmarking system which can indicate how many people found the resource useful and help users to keep and find their favorite tips and tricks, shared on the platform.

#### Key features of **The WebDevs Vault** in accordance with the general requirements set by the SoftUni academy:

- Interactivity built using the React library
- SPA with both Public and Private parts
- More than 3 different dynamic pages that fetch data from a back-end server, allowing their content to change with the application state (Vault page, Details page, Edit page and Profile page)
- Specific pages for listing records and record details - Vault page(catalog) and Resource Details page 
- Communication to a remote service (a REST api, provided in the repository)
- Working with the Resource collection allowing all CRUD operations
- Authentication implementation allowing logged in users to create records and make requests to the RESTful API and to interact with the records via the bookmarking feature of the app
- Delete/Edit functionalities for logged in Author users
- Access to the basic website information (catalog and details) for Guest users, but not to the functional activities (add/edit/delete/bookmark)
- Built with React + Vite and set to communicate to a RESTful API with implemented authentication
- Implementation of client-side routing with more than 5 pages and 2 pages with parameters(Details and Edit pages)
- Consistent and easily trackable development process with more than 50 meaningful commits to GitHub during a period of more than a month.

#### Additonal features in accordance with the other requirements set by the SoftUni academy:
- Implementation of user friendly and informative error handling and data validation
- Application structure with more than 15 React components aiming for adequate Separation of concerns
- Appropriate folder structure with separate folders for the components, contexts, route guards, custom hooks, interceptors, services and utils
- Implementing programming concepts, specific to the React library such as React hooks, Context API, stateless and stateful components, bound(controlled) forms, synthetic events and component lifecycle
- Component styling entirely with external CSS files
- Route guards for the Public and Private parts as well as front-end protection against unauthorized activities
- Good usability with simplistic design and easy UI aiming for good UX.

#### Bonus features:

- Usage of several popular external libraries and packages such as Axios, Formik, Yup, MeterialUI and others
- Implemention of a detailed Notification system for good feedback by handling many different events and errors using a restyled toast component from the React-toastify external package
- Implementation of front end pagination functionality using a restyled component from MaterialUI
- Implementation of HTTP interceptor with Axios to invalidate user session with cookie-based authentication process
- CSS module-based styling for the entire App ensuring style scoping and good maintainability for almost every component
- HTML and CSS design build from zero entirely for the WebDevs Vault project


<details>
<summary>Additional info</summary>
<br>

The WebDevs Vault is specifically built for the educational purposes of the React Course at the SoftUni academy. Back-end technologies are outside of the course scope. The app is intended to use a slightly modified version of a RESTful API provided and built by the SoftUni academy for some workshop exercises. The WebDevs Vault is developed with aim to be functional with minimum possible modifications of the backend server, hence to cope with the API limitations on the front-end and avoid API modification as much as possible.

HTML/CSS are outside of the React course scope. The App is not intended, nor required to be responsive or support mobile devices. The simplistic and basic look of the app was intended and desired. The WebDevs Vault is tested and intended to work on FHD resolution and 16:9 aspect ratio. 

</details>

</td>
</tr>
</table>

### Built With

- [React Library version 18.3.1](https://react.dev/)
- [Vite version 5.3.1](https://vitejs.dev/)
- [Axios HTTP Client](https://axios-http.com/)
- [Formik form library](https://formik.org/)
- [Material UI](https://mui.com/)
- [React-toastify](https://github.com/fkhadra/react-toastify)
- and more

## Getting Started

### Prerequisites

In order to run the app locally, you must have installed and running:
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [Node.Js with NPM](https://nodejs.org/en/download)

First, ensure the MongoDB server is running and uses the default port 27017.

Open the "server" folder located in the WebDevs Vault repository and extract the "server" archive. It contains two folders - "REST-API" and "dbBackup".

Then open a terminal of your choice and navigate to the extracted "REST-API" folder.

Install the API dependencies:
```sh
npm install
```

Run the back-end server:
```sh
npm start
```

! Ensure the server is running on the default port 3000. If successful, you should see the following message on the console:
```sh
Listening on port 3000!
```

Open a new terminal and navigate to the "client" folder.
Install the dependencies:
```sh
npm install
```

Run the client server:
```sh
npm run dev
```
Ensure the server is running on the default port 5173 or either ports 5174 or 5175. If successful, you should see a similar message on the console:
```sh
VITE v5.3.3  ready in 136 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
<details open>
<summary>! Important</summary>
Before opening the app on yor browser, make sure you have deleted all cookies originating from http://localhost:5173/.
</details>
<br>

Now you're all set! Open your browser on http://localhost:5173/ and enjoy using the WebDevs Vault application locally! 

#### Optional (DB restore)

After successfully starting the app, you may use the DB backup json files(provided in the "server/dbBackup" folder) to restore some DB entries. 

The recommended approach is to install and use the [MongoDB Compass GUI](https://www.mongodb.com/products/tools/compass).

1. Install and run [MongoDB Compass GUI](https://www.mongodb.com/products/tools/compass)

2. Connect to the MongoDB local server. The default address is 'mongodb://localhost:27017'.

3. In the Databases dropdown search for the database named "vaultDb". Should be automatically created after running the backend server. If missing, use GUI "Create database" button and create one with that exact name.

4. The "vaultDb" database must already contain "themes" and "users" collections, automatically created. If missing, use GUI "Create collection" button and create collections with those exact names.

5. Open each of the two collections and use Add data -> Import JSON buttons to import the backup files provided in the "dbBackup" folder.

You now have a set of preloaded resources, as well as 3 test users:
| Username                       | Email     | Password                                                                 |
| -------------------------- | ------------------ | --------------------------------------------------------------------------- |
| Miro          | miro@abv.bg | 1234                                                         |
| Pesho                  | pesho@abv.bg | 1234                          |
| Gosho           | gosho@abv.bg            | 1234


## App Usage

Opening your browser on http://localhost:5173/ will lend you on the Home page. At this point, only the Public Part of the app will be visible. Use the navigation bar to explore the platform.

<details>
<summary>!Note</summary>
<br>

!Note: Opening the dev tools on your browser you may see a 401 response when you first load the page. This is expected behavior related to the authentication procedure used by the app on refresh. The user authentication status is being checked via a http request to the API. This approach is specifically supported by the API, provided by the SoftUni academy. 

</details>

## Source code structure

#### Architecture

The WebDevs Vault app demonstrates a component-based approach with a separate service layer responsible for the API communication.

The App structure consist of several separated folders:

1. Components folder - Contains all the react components of the app, each in an individual folder also containing a CSS module file responsible for the component's scoped styling

2. Services Folder - Containing the service layer - two main services used by the app to communicate with the API - the Resource service and the User service

3. Other folders containing files related to specific functionalities - Hooks folder for the custom hooks; Context folder for the created contexts; Guards folder for the route guards; Interceptor folder and Utils folder  

The main layout of the app is located in the App.jsx file

#### Components

The App consists of 19 components. Some of them are stateless (ex.: About and Not-found) but most are stateful. Most components have separated scoped styles with the exception of the Add and Edit components that share styles scoped only for them. The Catalog-entry component is also an exception and it doesn't have a CSS module but uses the scoped styles of its parent component (either the Catalog or the Profile component). Some components as the Catalog-entry, Pagination and Loader components are being reused for different app views.

#### Services

The WebDevs vault uses a separated Service layer to communicate with the RESTful API. Two main services are implemented - User service, responsible for user related HTTP request and Resource service, responsible for the resource related request to the API. Both services use the Axios HTTP client

#### Custom Hooks

The WebDevs Vault uses a custom useForm hook to manage the User forms of the app (Register and Login). The useForm hook also implements functional validation by accepting a validationFn as a parameter.

#### Forms

As a student project the WebDevs Vault aims to showcase different approaches and techniques for managing reactive forms. The User forms of the app (Register and Login) work with the useForm custom hook and a function-based validation. The Resource forms of the app (Add and Edit) use an external library - Formik and a component-based approach to work with forms as well as a schema-based validation implemented with the Yup library. Hence the app demonstrated both the hook-based and component-based form approaches and both the function-based and schema-based validation approaches. The validation functions and schemas are separated in a single file in the Utils folder.

#### Error Handling and Notifications

The WebDevs vault uses a Notification system based on the React-toastify library to provide feedback. The error handling logic is mostly based in the components to provide specific feature-based feedback for each components functionality avoiding the draw-backs of global error handling. Nonetheless the app contains an HTTP interceptor which can easily facilitate global error handling though it currently serves a more specific function. The app also uses notifications for multiple successful events and not only errors.

#### Authentication, User session, Context and Interceptor

The WebDevs vault uses a cookie-based authentication process, accepting a cookie from the backend which carries the active session's JWT. The authentication data is stored and made accessible across the app via the implemented AuthContext. Session persistence is also implemented via an authenticated API request on browser refresh. Session invalidation is also implemented via HTTP interceptor using the Axios client. The interceptor aims to identify and handle the HTTP responses that indicate an invalid user session on the backend server by clearing the AuthContext data.

#### Route Guards

The app Route Guards are organized in a separate folder and are responsible to prevent the unauthorized access to both the private and public parts of the application.

#### Others

A dateTransform function is present in the Utils folder to allow conversion of dates in different formats. The function uses the Moment external library.

## Known issues

- Unresponsive design
- Lacking features for more detailed feedback (such as comments and likes)
- Lacking search functionality to allow resource fast finding
- 401 server response on initial load or on refresh when not logged (expected behavior, explained [above](#app-usage), see !Note)
- Despite being handled and presented to the user with a toast, some errors may come with a general 400 response status, which is caused by an API limitation (very basic global error handler on the back-end)

## Contributing

The app has educational and demo purposes only. The author do not expect nor require any contributions. The WebDevs Vault solely aims to showcase the learnt techniques in using the React library to build interactive web applications.

However anyone is free to give feedback, request a feature, report a bug or a start a discussion

## Support

Reach out to the author:

- [WebDevs Vault repo discussions](https://github.com/theTrackSuitDev/webDevsVault/discussions)


## License

This project is licensed under the **MIT license**. 

See [LICENSE](LICENSE) for more information.

!Note: The info and pictures used as preloaded resources in the DB backups have educational, demonstrative and absolutely non-profit purposes! The author of the WebDevs Vault web app does not own, nor claims copyrights on them. 

## Acknowledgements

Special thanks to the authors of the used packages, which can be found in package.json file, under dependencies. 

Big appreciation to [Iconpacks](https://www.iconpacks.net/) for providing the free images used in the app!

Also, kudos to the [WebDevs Telegram community](https://t.me/+VN2i12PAynpiNDBk) for providing friendly support and helpful advices during the development.

Special mention and credit to [Deyan Slavov](https://github.com/didoslavov) for coming up with [the idea](https://prikachi.net/images/2024/08/07/5880008832262981308.jpg) for such an app.

This documentation is based on the [amazing-github-template](https://github.com/dec0dOS/amazing-github-template).

