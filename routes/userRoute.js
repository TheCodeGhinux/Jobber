import express from 'express'
import { login, register, updateUser } from '../controllers/userController.js'

const router = express.Router()

// router.get('/', (req, res) => {
//   res.send('Testing route')
// })

// router.post('/get', register)
router.post('/register', register)
router.post('/login', login)
router.patch('/updateUser', updateUser)

export default router;