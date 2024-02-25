const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/applicants', controller.applicants); // List all
router.get('/applicant/:id', controller.applicant); // Read one

// ASPIRANTES
router.post('/applicant/', controller.addApplicant); // Create
router.post('/updateApplicant/:id', controller.updateApplicant); // Update
router.post('/deleteApplicant/:id', controller.removeApplicant); // Delete
// router.post('/updateApplicant/:id', controller.applicant);

// PROFESIONES
router.get('/profession/:id', controller.profession);
router.get('/professions', controller.professions);
router.post('/addprofession/', controller.addProfession); // Create
router.post('/updateprofession/:id', controller.updateProfession); // Update
router.post('/deleteprofession/:id', controller.removeProfession); // Delete

module.exports=router