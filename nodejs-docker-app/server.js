const express = require('express');

const PORT = 5000;


// APP
const app = express();
app.get('/', (req, res) => {
    res.send("Hello, World");
});

app.listen(PORT);
console.log("server is running");