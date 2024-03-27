const mongoose=require('mongoose');

const SchemaChambre=new mongoose.Schema({
   type:{
        type:String,
        required:true
   } ,
   capacite:{
        type:String,
        required:true       
    } ,
    prix:{
        type:Boolean,
        required:true
    } ,
    disponibilite:{
        type:Boolean,
        required:true
    } ,
    hotel:{
        type:String,
        required:true
    } ,
    
    
},{
    timestamps:true
});
 
const Chambre =mongoose.model('Chambre',SchemaChambre);
module.exports={
    Chambre
}