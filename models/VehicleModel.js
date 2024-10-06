import mongoose from 'mongoose'
import { VEHICLE_BRAND } from '../utils/constants.js'

const VehicleSchema = new mongoose.Schema(
  {
    name: String,
    plate: String,
    brand: {
      type: String,
      enum: Object.values(VEHICLE_BRAND).map((brand) => brand.name),
      default: VEHICLE_BRAND.POR_DEFECTO.name,
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
