const express = require('express');
const app = express();

const port = 8080;

app.listen(port, (error) => {
    if (error) {
        console.log('Failed to connect to application with error', error);
    }
    console.log('Application runs on port', port);
})