import express from 'express'
import { createJob, deleteJob, getAllJobs, showStats, updateJobs } from '../controllers/jobsController.js'

const router = express.Router()

router.get('/', getAllJobs)
router.post('/', createJob)
router.get('/stats', showStats)
router.patch('/:id', updateJobs)
router.delete('/:id', deleteJob)

export default router;