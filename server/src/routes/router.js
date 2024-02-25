const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

// Configuracion de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
        const nameFile = `applicant_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, nameFile);
    },
});
const uploadFile = multer({ storage });


// Controllers
const controller = require('../controllers/controller');

router.get('/applicants', controller.applicants); // List all
router.get('/applicant/:id', controller.applicant); // Read one
// ASPIRANTES
router.post('/applicant/',uploadFile.single("photo"), controller.addApplicant); // Create
router.post('/updateApplicant/:id',uploadFile.single("avatar") ,controller.updateApplicant); // Update
router.post('/deleteApplicant/:id', controller.removeApplicant); // Delete
// router.post('/updateApplicant/:id', controller.applicant);

// PROFESIONES
router.get('/profession/:id', controller.profession);
router.get('/professions', controller.professions);
router.post('/addprofession/', controller.addProfession); // Create
router.post('/updateprofession/:id', controller.updateProfession); // Update
router.post('/deleteprofession/:id', controller.removeProfession); // Delete

module.exports=router