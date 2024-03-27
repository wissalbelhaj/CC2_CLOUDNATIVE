const express = require('express');
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
const UserPath = require ('./Route/user');

dotenv.config();
mongoose
    .connect(process.env.URL_MONGOOSE)
    .then(()=>console.log(`Server is Connected A mongodb`))
    .catch((err)=>console.log(`Server Failed A connected `,err));

const app = express();
app.use(express.json());
app.use('/Auth-service', UserPath);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server ${PORT}`));