import express from 'express'
import {getMonograph, createMonograph} from '../controllers/monograph.js'

const router = express.Router()

// localhost:5000/monographs
router.get('/', getMonograph)
router.post('/', createMonograph)


export default router