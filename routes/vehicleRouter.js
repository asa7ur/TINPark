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
  validateVehicleIdParam,
} from '../middleware/validationMiddleware.js'

// router.get('/', getAllVehicles)
// router.get('/:id', getVehicle)

router.route('/').get(getAllVehicles).post(validateVehicleInput, createVehicle)

router
  .route('/:id')
  .get(validateVehicleIdParam, getVehicle)
  .patch(validateVehicleIdParam, updateVehicle)
  .delete(validateVehicleIdParam, deleteVehicle)

export default router
