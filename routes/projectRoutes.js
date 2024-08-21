const express = require('express');
const { fetchAllProjects, fetchProjectById, createNewProject, updateProjectDetails, addTask } = require('../controllers/projectController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/projects', authMiddleware, fetchAllProjects);
router.get('/projects/:id', authMiddleware, fetchProjectById);
router.post('/projects', authMiddleware, createNewProject);
router.put('/projects/:id', authMiddleware, updateProjectDetails);
router.post('/projects/:id/', authMiddleware, addTask);

module.exports = router;
