const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/applicants', controller.applicants);

router.get('/applicant/:id', controller.applicant);

router.post('/applicant/', controller.addApplicant); // Create
router.post('/updateApplicant/:id', controller.updateApplicant); // Update
router.post('/deleteApplicant/:id', controller.removeApplicant); // Delete
// router.post('/updateApplicant/:id', controller.applicant);


router.get('/professions', controller.professions);
router.get('/profession/:id', controller.profession);

module.exports=router