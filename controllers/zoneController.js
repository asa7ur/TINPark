import { StatusCodes } from 'http-status-codes'
import Zone from '../models/ZoneModel.js'

export const getAllZones = async (req, res) => {
  const zones = await Zone.find({})
  res.status(StatusCodes.OK).json({ zones })
}

export const createZone = async (req, res) => {
  req.body.createdBy = req.user.userId
  const zone = await Zone.create(req.body)
  res.status(StatusCodes.CREATED).json({ zone })
}

export const getZone = async (req, res) => {
  const zone = await Zone.findById(req.params.id)
  res.status(StatusCodes.OK).json({ zone })
}

export const updateZone = async (req, res) => {
  const updatedZone = await Zone.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )
  res
    .status(StatusCodes.OK)
    .json({ msg: 'zone modified', zone: updatedZone })
}

export const deleteZone = async (req, res) => {
  const removedZone = await Zone.findByIdAndDelete(req.params.id)
  res
    .status(StatusCodes.OK)
    .json({ msg: 'zone deleted', zone: removedZone })
}
