//Instansiating the variables for our dependencies.
const express = require('express');
const fs = require('fs');
const app = express();

// Routes

//TODO - Router for email sending to company leader.
//TODO - Router for checking for credential in database.
//TODO - Router for company leader to view all employee data. (AJAX request - fetching data from API or database url);

// Using various librariees from node_modules.
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Components for applications header and footer

/* const headerPage = fs.readFileSync();
const footerPage = fs.readFileSync(); */

// Plain HTML pages stored as variables for server-side rendering.
const loginPage = fs.readFileSync(__dirname + "/public/logInPage/logInPage.html", "utf-8");

// Get requests for application endpoints
app.get("/logIn", (req, res) => {
    res.send(loginPage);
});

// Post requests for data submitted to server-side.



const server = app.listen(8080 || process.env.PORT, (error) => {
    if (error) {
        console.log('Failed to connect to application with error', error);
    }
    console.log('Application runs on port', server.address().port);
});
