const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/applicants', controller.applicants); // List all
router.get('/applicants/:id', controller.applicant); // Read one

// ASPIRANTES
router.post('/applicants/', controller.addApplicant); // Create
router.post('/applicants/update/:id', controller.updateApplicant); // Update
router.delete('/applicants/delete/:id', controller.removeApplicant); // Delete
// router.post('/updateApplicant/:id', controller.applicant);

// PROFESIONES
router.get('/professions', controller.professions);
router.get('/professions/:id', controller.profession);
router.post('/addprofession/', controller.addProfession); // Create
router.post('/updateprofession/:id', controller.updateProfession); // Update
router.post('/deleteprofession/:id', controller.removeProfession); // Delete

module.exports=router