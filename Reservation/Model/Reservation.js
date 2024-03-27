const mongoose=require('mongoose');

const SchemaReservation=new mongoose.Schema({
    utilisateur_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required:true
    },
   chambre_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'chambre',
        required:true       
    } ,   
    
},{
    timestamps:true
});
 
const Reservation =mongoose.model('Reservation',SchemaReservation);
module.exports={
    Reservation
}