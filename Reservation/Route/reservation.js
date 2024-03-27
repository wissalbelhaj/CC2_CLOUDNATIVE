
const express = require ('express')
const AsyncHandler=require('express-async-handler');
const mongoose=require('mongoose');
const {Reservation }=require('../Model/Reservation');
const {Chambre} = require ('../../Chambre/Model/Chambre')
const router=express.Router();



router.post('/ajouter-reservation', async (req, res) => {
    try {
      const { utilisateur_id, chambre_id } = req.body;
      const chambre = await Chambre.findById(chambre_id);
      if (!chambre) {
        return res.status(404).json({ message: 'Chambre non trouvée' });
      }
      if (!chambre.disponibilite) {
        return res.status(409).json({ message: 'Chambre non disponible' });
      }
      const reservation = new Reservation({ utilisateur_id, chambre_id });
      await reservation.save();
      res.status(201).json({ message: 'Réservation ajoutée avec succès' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  module.exports = router;
