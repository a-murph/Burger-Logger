# Burger-Logger

Burger Logger is a simple Express and Handlebars MVC app that keeps track of burgers the user has and hasn't eaten.

## How to Use

Type the name of a burger into the text field and hit "Submit" to add it to your list of uneaten burgers.

Click the "Eat!" button next to any burger to move it to the list of eaten burgers.

## How it Works

When a user clicks the "Submit" button, a `POST` request is sent from the View to the server, which is handled by the Controller.

The Controller parses the request's body and passes the relevant information on to the burger Model.

The Model calls the database ORM to send an `INSERT` query to the MySQL database. Once the database query resolves, this data is passed all the way back up the chain to the front-end JavaScript attached to the View, which then reloads the page to display the new Burger.

The process for displaying and updating burgers is similar. When the page loads the front-end JavaScript triggers a `GET` request that in turn calls a MySQL `SELECT` query and returns the information back to the View. The "Eat!" button triggers a `PUT` request that creates a MySQL `UPDATE` query to change the boolean `eaten` value of the selected burger.

## Tools Used

## Tools Used

The server is running JavaScript through [Node.js](https://nodejs.org/en/), using the [Express.js](https://expressjs.com/) framework.

[Handlebars](https://handlebarsjs.com/) is used to build HTML templates.

The [mysql](https://www.npmjs.com/package/mysql) NPM module is used to interface with the MySQL database.

The [body-parser](https://www.npmjs.com/package/body-parser) NPM module is used for getting data out of `POST` requests from the client.