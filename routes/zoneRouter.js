import { Router } from 'express'
const router = Router()

import {
  getAllZones,
  getZone,
  createZone,
  updateZone,
  deleteZone,
} from '../controllers/zoneController.js'

import {
  validateZoneInput,
  validateZoneIdParam,
} from '../middleware/validationMiddleware.js'

// router.get('/', getAllVehicles)
// router.get('/:id', getVehicle)

router.route('/').get(getAllZones).post(validateZoneInput, createZone)

router
  .route('/:id')
  .get(validateZoneIdParam, getZone)
  .patch(validateZoneInput, validateZoneIdParam, updateZone)
  .delete(validateZoneIdParam, deleteZone)

export default router
