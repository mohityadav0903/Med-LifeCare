const router = require('express').Router();
const Patient = require('../models/patient');
const createError = require('http-errors');

router.post('/register',async(req,res)=>{
    try{
        const emailExist = await Patient.findOne({email:req.body.email});
        if(emailExist) throw createError.Conflict('Email already exist');
        const phoneExist = await Patient.findOne({phone:req.body.phone});
        if(phoneExist) throw createError.Conflict('Phone already exist');
        const patient = new Patient(req.body);
        await patient.save();
        res.send(patient);
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;