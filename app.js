require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/add', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'add_cars.html'));
})

app.get('/update', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'update_cars.html'));
})

module.exports = app;