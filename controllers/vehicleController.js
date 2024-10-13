import { StatusCodes } from 'http-status-codes'
import Vehicle from '../models/VehicleModel.js'
import Zone from '../models/ZoneModel.js'

export const getAllVehicles = async (req, res) => {
  const vehicles = await Vehicle.find({ createdBy: req.user.userId })
  res.status(StatusCodes.OK).json({ vehicles })
}

export const createVehicle = async (req, res) => {
  req.body.createdBy = req.user.userId
  const vehicle = await Vehicle.create(req.body)
  res.status(StatusCodes.CREATED).json({ vehicle })
}

export const getVehicle = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id)
  res.status(StatusCodes.OK).json({ vehicle })
}

export const updateVehicle = async (req, res) => {
  const { id } = req.params
  const { parked } = req.body

  try {
    // Find the vehicle and its current parked zone (if any)
    const vehicle = await Vehicle.findById(id)
    if (!vehicle) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: 'Vehicle not found' })
    }

    const previousZone = vehicle.parked
    const newZoneId = parked

    // If vehicle is moving from one zone to another (or being removed from a zone)
    if (previousZone !== newZoneId) {
      // Update previous zone by removing the vehicle
      if (previousZone) {
        const prevZone = await Zone.findById(previousZone)
        if (prevZone) {
          prevZone.parkedVehicles.pull(vehicle._id) // Remove vehicle from previous zone
          prevZone.occupiedSpaces -= 1 // Decrease occupied spaces
          await prevZone.save()
        }
      }

      // Update new zone by adding the vehicle (if not removing from zones)
      if (newZoneId) {
        const newZone = await Zone.findById(newZoneId)
        if (!newZone) {
          return res
            .status(StatusCodes.NOT_FOUND)
            .json({ msg: 'New zone not found' })
        }
        newZone.parkedVehicles.push(vehicle._id) // Add vehicle to new zone
        newZone.occupiedSpaces += 1 // Increase occupied spaces
        await newZone.save()
      }
    }

    // Update the vehicle's parked state
    vehicle.parked = parked
    const updatedVehicle = await vehicle.save()

    res
      .status(StatusCodes.OK)
      .json({ msg: 'Vehicle updated', vehicle: updatedVehicle })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
  }
}

export const deleteVehicle = async (req, res) => {
  const removedVehicle = await Vehicle.findByIdAndDelete(req.params.id)
  res
    .status(StatusCodes.OK)
    .json({ msg: 'vehicle deleted', vehicle: removedVehicle })
}
