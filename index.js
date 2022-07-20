const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PatientRoute = require('./routes/patients');
require('./helpers/mongodb')
dotenv.config();        
app.use(express.json());


app.get('/', (req, res) => {res.send('Hello World');});


app.use('/api/patient', PatientRoute);


app.listen(process.env.PORT||5000, () => {
    console.log('Server is running');
});