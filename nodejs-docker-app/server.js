const express = require('express');

const PORT = 5050;


// APP
const app = express();
app.get('/', (req, res) => {
    res.send("Hello, World~!~!");
});

app.listen(PORT);
console.log("server is running");