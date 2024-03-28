require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT; 
const DB = process.env.DATABASE_URI;

mongoose.connect(DB).then(res => {
    console.log('Database Connected!');
}).catch(err => {
    console.log(err.message);
})

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}\nhttp://localhost:${PORT}/`);
})
