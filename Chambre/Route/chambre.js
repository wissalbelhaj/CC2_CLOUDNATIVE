const express = require ('express');
const AsyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const { Chambre}= require ('../Model/Chambre')
const router = express.Router();

router.post('/ajouter-chambre',AsyncHandler(async(req,res)=>{
    const newChambre = new Chambre({
        type : req.body.type,
        capacite : req.body.capacite,
        disponibilite : req.body.disponibilite,
        hotel : req.body.hotel,
    });
    const resuleta = await newChambre.save();
    res.status(200).json(resuleta);
}));

  
  router.get('/chambre/:id', AsyncHandler(async (req, res) => {
    const chambres = await Chambre.findById(req.params.id);
    if (!chambres) {
        return res.status(404).json({ message: 'chambres non trouvé' });
    }
    res.status(200).json(chambres);

}));

module.exports = router;