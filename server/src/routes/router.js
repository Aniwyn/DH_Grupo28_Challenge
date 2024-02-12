const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.use('/applicants', controller.applicants);
router.use('/applicants/:id', controller.applicant);