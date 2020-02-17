# Acebook
​
This is a Node.js template for the Acebook engineering project.
​
It uses:
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
​
## Card wall
​
https://trello.com/b/F9ML4oe3/acebook-challenge-workboard
​
## User Stories & Features Implemented

```
Feature 1: Sign Up
As a user,
So other users know it's me,
I would like to be able to sign up  

Feature 2: Log In
As  a user,
So I don't have to sign up each time,
I would like to be able to log in  

Feature 3: Log Out
As a user,
So when I finish surfing Acebook,
I would like to be able to log out

Feature 4: Profile
As a user,
So others know more information about me,
I would like to have my own profile

Feature 5: Posts with Posted By and Timestamp
As a user,
So others know what I am doing,
I would like to be able to post a post attributed to me with a timestamp

Feature 6: Posts with Comments
As a user,
So others know what I think about a post,
I would like to be able to comment on a post

Feature 7: Posts With Tags
As a user,
So my friends know when a post is related to them,  
I would like to be able to tag my friends on a post

Feature 8: Searching for Users
As a user,
So I can find my friends on Acebook,  
I would like to be able to search for other users on Acebook

Feature 9: Adding Friends
As a user,
So I can see be connected with my friends,
I would like to be able to add my friends on Acebook

Feature 10: Accepting and Declining Friend Requests
As a user,
So I can be friends with users I know,
I would like to be able to accept and decline friend requests

Feature 11: View Friends
As a user,
So I can who I am connected with,
I would like to be able to view my friends

Feature 12: Relationship Status
As a user,
So I can tell other users my relationship status,
I would like to be able to declare a relationship status on my profile

```
## Quickstart
​
### Install Node.js
​
1. Install Node Version Manager (NVM)
    ```
    brew install nvm
    ```
    Then follow the instructions to update your `~/.bash_profile`.
1. Open a new terminal
1. Install the latest long term support (LTS) version of [Node.js](https://nodejs.org/en/), currently `12.14.1`.
    ```
    nvm install 12.14.1
    ```
​
### Set up your project
​
1. Fork this repository
1. Rename your fork to `acebook-<team name>`
1. Clone your fork to your local machine
1. Install Node.js dependencies
    ```
    npm install
    ```
1. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
1. Install MongoDB
    ```
    brew tap mongodb/brew
    brew install mongodb-community@4.2
    ```
1. Start MongoDB
    ```
    brew services start mongodb-community@4.2
    ```
​
### Start
​
1. Start the server
    ```
    npm start
    ```
1. Browse to [http://localhost:3000](http://localhost:3000)
​
### Test
​
* Run all tests
    ```
    npm test
    ```
* Run a check
    ```bash
    npm run lint              # linter only
    npm run test:unit         # unit tests only
    npm run test:integration  # integration tests only
    ```
​
#### Start test server
​
The server must be running locally with test configuration for the
integration tests to pass.
```
npm run start:test
```
This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.
