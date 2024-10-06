import { StatusCodes } from 'http-status-codes'
import Vehicle from '../models/VehicleModel.js'

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
  const updatedVehicle = await Vehicle.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )
  res
    .status(StatusCodes.OK)
    .json({ msg: 'vehicle modified', vehicle: updatedVehicle })
}

export const deleteVehicle = async (req, res) => {
  const removedVehicle = await Vehicle.findByIdAndDelete(req.params.id)
  res
    .status(StatusCodes.OK)
    .json({ msg: 'vehicle deleted', vehicle: removedVehicle })
}
