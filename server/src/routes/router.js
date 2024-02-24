const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.use('/applicants', controller.applicants);
router.use('/applicant/:id', controller.applicant);
router.use('/professions', controller.professions);
router.use('/profession/:id', controller.profession);

module.exports=router