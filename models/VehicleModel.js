import mongoose from 'mongoose'
import { VEHICLE_BRAND } from '../utils/constants.js'

const VehicleSchema = new mongoose.Schema(
  {
    name: String,
    plate: String,
    brand: {
      type: String,
      enum: Object.values(VEHICLE_BRAND),
      default: VEHICLE_BRAND.AUDI,
    },
    parked: {
      type: String,
      default: '',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Vehicle', VehicleSchema)
