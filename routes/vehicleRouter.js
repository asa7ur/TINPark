import { Router } from 'express'
const router = Router()

import {
  getAllVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from '../controllers/vehicleController.js'

import {
  validateVehicleInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js'

// router.get('/', getAllVehicles)
// router.get('/:id', getVehicle)

router.route('/').get(getAllVehicles).post(validateVehicleInput, createVehicle)

router
  .route('/:id')
  .get(validateIdParam, getVehicle)
  .patch(validateVehicleInput, validateIdParam, updateVehicle)
  .delete(validateIdParam, deleteVehicle)

export default router
