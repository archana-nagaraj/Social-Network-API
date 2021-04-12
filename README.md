# Social-Network-API

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


## Description

    An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Table of Contents

* [Description](#description)
* [Demonstration](#demonstartion)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## Demonstration 
[Walkthrough video demonstarting technical acceptance and starting the application server](https://drive.google.com/file/d/1jR-PqHA14y0dYNfbN-IRJHvXYcdVVi2u/view)

[Walkthrough video demonstarting Get/Post/Put/delete User and Thought Endpoints](https://drive.google.com/file/d/1QrDAGAHbUDpnxDkNqOeW1NM3VFlfxnv9/view)

[Walkthrough video demonstarting Put/delete reaction Endpoints](https://drive.google.com/drive/u/0/folders/1ImmAOzh0pb2NRJrS6SFQL0FdN6771rDg)

[Walkthrough video demonstarting Post/delete friend Endpoints](https://drive.google.com/file/d/1gFZL8bSx0KnqCPzLBaho8rgM8PfCQ2_p/view)

### Models
    User
    Thought
    Reaction (used as a subdocument in Thought)

### Endpoints
    **User**
    Get all users:        GET /api/users
    Create a user:        POST /api/users
    Get user by ID:       GET /api/users/:id
    Update a user:        PUT /api/users/:id
    Delete a user:        DELETE /api/users/:id

    **Friend**
    Add a friend:         PUT /api/users/:userId/friends/:friendId
    Delete a friend:      DELETE /api/users/:userId/friends/:friendId

    **Thought**
    Get all thoughts:     GET /api/thoughts
    Create a thought:     POST /api/thoughts
    Get thought by ID:    GET /api/thoughts/:id
    Update a thought:     PUT /api/thoughts/:id
    Delete a thought:     DELETE /api/thoughts/:id

    **Reaction**
    Add a reaction:       PUT /api/thoughts/:id/reactions
    Delete a reaction:    DELETE /api/thoughts/:id/reactions


## Technologies
    Node.js
    Express.js
    mongoose
    mongodb


## Installation
* Ensure to have [MongoDB](https://www.mongodb.com/) installed on your machine 

* Git clone the repo 

* Install npm by running the following in terminal
    - npm install

* Run the app
    npm start

### Usage
This project demonstrates the database for a social networking application. Use your browser or an app like [Insomnia](https://insomnia.rest/) to test the REST API or Endpoints.

### Tests
There are no tests for this application

### License
This repository is licensed under the [Apache license](./LICENSE).


## Questions

For any questions about the project/repository please contact me @ [archana.nagaraj@gmail.com](mailto:archana.nagaraj@gmail.com) </br>
GitHub @ [archana-nagaraj](https://github.com/archana-nagaraj) 