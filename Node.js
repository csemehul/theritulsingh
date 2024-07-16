// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    // Handle form data here
    res.send(`Thank you, ${name}!`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
