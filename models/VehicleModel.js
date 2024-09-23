import mongoose from 'mongoose'
import { VEHICLE_STATUS, VEHICLE_TYPE } from '../utils/constants.js'

const VehicleSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    vehicleStatus: {
      type: String,
      enum: Object.values(VEHICLE_STATUS),
      default: VEHICLE_STATUS.PENDING,
    },
    vehicleType: {
      type: String,
      enum: Object.values(VEHICLE_TYPE),
      default: VEHICLE_TYPE.INTERNSHIP,
    },
    vehicleLocation: {
      type: String,
      default: 'Earth',
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
