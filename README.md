# FusionAuth Example: Gatsby

## About

This example app shows how to add authentication to your Gatsby app using FusionAuth to log in, log out, and view user data.

## Installation

This assumes you have FusionAuth and node installed. See the [5 minute setup guide](https://fusionauth.io/docs/v1/tech/5-minute-setup-guide) for the former and [nodejs.org](https://nodejs.org/) for the latter.

* Clone this repo.
* Create an application, user, user registration and API key in FusionAuth.
* Update `config.js` with the client id, client secret, application id (same as the client id), and api key.
* Open two terminal windows. 
* In one, `cd server; npm install; npm start`
* In the other, `cd gatsby; npm install; npm start`
* Visit `http://localhost:8000/` and login.

## More

Full blog post available here: https://fusionauth.io/blog/2020/06/25/using-oauth-and-pkce-to-add-authentication-to-your-gatsby-site
