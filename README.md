
# ZenbitTech Form

About the Project

This is a full-stack web application that aims to provide a feedback form for users, which can then be written to a database for further analysis. The main goal of the application is to provide an easy-to-use form for users to submit feedback and for administrators to view and analyze the data.

## Tech Stack


The following technologies were used to build this project:

    MySQL - used to build the database that stores the feedback data.
    Node.js - provides the backend environment for the project.
    Typescript - a statically-typed superset of JavaScript that helps catch errors early in development.
    Express - a lightweight backend framework for Node.js.
    React - a popular frontend library for building user interfaces.
    Redux - a predictable state container for JavaScript apps.

Together, these technologies enable us to build a scalable and robust full-stack web application that can handle a high volume of users and data.
## Instalation and Setup


To run this project on your local machine, please follow the instructions below:

    Clone the repository to your local machine.
    Navigate to the project directory in your terminal.
    Install the necessary dependencies by running npm install.
    Start the development server by running npm start.
    Navigate to http://localhost:3000 in your web browser to view the application.

Note: You will also need to set up a MySQL database to store the feedback data. Please see the documentation for your database management system for instructions on how to do this.
## API Reference

#### Get a standard response indicating whether the api is online

```http
  GET /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `NONE` | `JSON` |  { message: 'it's alive' } |

#### This endpoint takes care of saving the form in the DB  

```http
  PUT /contact
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `{ name, email, message }`      | `JSON` | **format:**  { name: 'example', email: 'validEmail@format.com', message: 'a message of at least 20 characters' } |

