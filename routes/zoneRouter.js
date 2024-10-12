import { Router } from 'express'
const router = Router()

import {
  getAllZones,
  getZone,
  createZone,
  updateZone,
  deleteZone,
  getZoneVehicles,
  updateZoneVehicles,
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
  .patch(validateZoneIdParam, updateZone)
  .delete(validateZoneIdParam, deleteZone)

router
  .route('/:id/vehicles')
  .get(validateZoneIdParam, getZoneVehicles)
  .patch(validateZoneIdParam, updateZoneVehicles)

export default router
