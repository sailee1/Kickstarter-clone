import express from 'express'
import { protect } from '../middleware/authMiddleware'
const router = express.Router()

const{
    getProjectsHandler,
    createProjectHandler,
    getProjectHandler,
    updateProjectHandler,
    deleteProjectHandler
} = require('../controllers/projectController')


router.route('/').get(getProjectsHandler).post(protect,createProjectHandler)
router.route('/:id').get(getProjectHandler).put(protect,updateProjectHandler).delete(protect,deleteProjectHandler)




module.exports = router