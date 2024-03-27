const express = require ('express')
const AsyncHandler=require('express-async-handler');
const mongoose=require('mongoose');
const {Utilisateur }=require('../Model/utilisateur');
const router=express.Router();
const jwt = require('jsonToken');


router.post('/ajouter-utilisateur',AsyncHandler(async(req,res)=>{
    const newUser = new Chef({
        name : req.body.name,
        email : req.body.email,
        login : req.body.login,
        mdp : req.body.mdp,
    });
    const resuleta = await newUser.save();
    res.status(200).json(resuleta);
}));


router.post('/connecter', async (req, res) => {
    try {
      const { login, mdp } = req.body;
      const utilisateur = await Utilisateur.findOne({ login });
      if (!utilisateur) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      if (await bcrypt.compare(mdp, utilisateur.mdp)) {
        const token = jwt.sign({ login: utilisateur.login }, 'secret_key');
        return res.status(200).json({ token });
      }
      res.status(401).json({ message: 'Mot de passe incorrect' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.get('/verifier-utilisateur/:id', async (req, res) => {
    try {
      const utilisateur = await Utilisateur.findById(req.params.id);
      if (!utilisateur) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      res.status(200).json({ message: 'Utilisateur trouvé' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;