const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');

app.use(express.json());

app.use('/users', userRoute);

const errorHandler = require('./middleware/errorHandler');

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Bro is listening to http://localhost:${PORT}`);
});