import { body, param, validationResult } from 'express-validator'
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../errors/customErrors.js'
import { VEHICLE_BRAND} from '../utils/constants.js'
import mongoose from 'mongoose'
import Vehicle from '../models/VehicleModel.js'
import User from '../models/UserModel.js'
import Zone from '../models/ZoneModel.js'

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg)

        const firstMessage = errorMessages[0]
        console.log(Object.getPrototypeOf(firstMessage))
        if (errorMessages[0].startsWith('no vehicle' || 'no zone')) {
          throw new NotFoundError(errorMessages)
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route')
        }
        throw new BadRequestError(errorMessages)
      }
      next()
    },
  ]
}

export const validateVehicleInput = withValidationErrors([
  body('name').notEmpty().withMessage('se requiere el nombre'),
  body('plate').notEmpty().withMessage('se requiere la matricula'),
  body('brand')
    .isIn(Object.values(VEHICLE_BRAND))
    .withMessage('se requiere la marca del vehiculo'),
])

export const validateZoneInput = withValidationErrors([
  body('name').notEmpty().withMessage('se requiere el nombre'),
  body('totalSpaces').notEmpty().withMessage('se requiere el numero de espacios disponibles'),
  body('map').notEmpty().withMessage('se requiere el enlace del mapa'),
])

export const validateVehicleIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value)
    if (!isValidMongoId) throw new BadRequestError('invalid MongoDB id')

    const vehicle = await Vehicle.findById(value)
    if (!vehicle) throw new NotFoundError(`no vehicle with id ${value}`)
    const isAdmin = req.user.role === 'admin'
    const isOwner = req.user.userId === vehicle.createdBy.toString()
    if (!isAdmin && !isOwner)
      throw new UnauthorizedError('not authorized ot access this route')
  }),
])

export const validateZoneIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value)
    if (!isValidMongoId) throw new BadRequestError('invalid MongoDB id')

    const zone = await Zone.findById(value)
    if (!zone) throw new NotFoundError(`no zone with id ${value}`)
    const isAdmin = req.user.role === 'admin'
    if (!isAdmin)
      throw new UnauthorizedError('not authorized ot access this route')
  }),
])

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email })
      if (user) {
        throw new BadRequestError('email already exists')
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
  body('lastName').notEmpty().withMessage('last name is required'),
])

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
])

export const validateUpdateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email })
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('email already exists')
      }
    }),
  body('lastName').notEmpty().withMessage('last name is required'),
])
