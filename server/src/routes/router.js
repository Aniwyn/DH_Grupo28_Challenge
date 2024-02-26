const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

// Configuracion de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/img/");
    },
    filename: (req, file, cb) => {
        const nameFile = `applicant_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, nameFile);
    },
});
const uploadFile = multer({ storage });

const controller = require('../controllers/controller');

router.get('/applicants', controller.applicants); // List all
router.get('/applicants/:id', controller.applicant); // Read one

// ASPIRANTES
router.post('/applicants/',uploadFile.single("image"), controller.addApplicant); // Create
router.post('/applicants/update/:id',uploadFile.single("image"), controller.updateApplicant); // Update
router.delete('/applicants/delete/:id', controller.removeApplicant); // Delete
// router.post('/updateApplicant/:id', controller.applicant);

// PROFESIONES
router.get('/professions', controller.professions);
router.get('/professions/:id', controller.profession);
router.post('/addprofession/', controller.addProfession); // Create
router.post('/updateprofession/:id', controller.updateProfession); // Update
router.post('/deleteprofession/:id', controller.removeProfession); // Delete

module.exports=router