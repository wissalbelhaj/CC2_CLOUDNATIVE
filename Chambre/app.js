const express = require('express');
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
const ChambrePath = require ('./Route/chambre');

dotenv.config();
mongoose
    .connect(process.env.URL_MONGOOSE)
    .then(()=>console.log(`Server is Connected A mongodb`))
    .catch((err)=>console.log(`Server Failed A connected `,err));

const app = express();
app.use(express.json());
app.use('/Chambre', ChambrePath);

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>console.log(`server ${PORT}`));