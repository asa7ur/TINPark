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

export const getZoneVehicles = async (req, res) => {
  const zoneId = req.params.id
  try {
    const zone = await Zone.findById(zoneId).populate('vehicles')
    if (!zone) {
      return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Zone not found' })
    }
    res.status(StatusCodes.OK).json({ vehicles: zone.vehicles })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
  }
}

export const updateZoneVehicles = async (req, res) => {
  const {vehicleId, action} = req.body
  const {id: zoneId} = req.params

  if (!vehicleId || !action){
    return res.status(StatusCodes.NOT_FOUND).json({msg: 'Zone not found'})
  }
  const zone = await Zone.findById(zoneId)
  if (!zone) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Zone not found' })
  }

  if (action === 'add') {
    // Add vehicle ID if it doesn't already exist
    if (!zone.vehicles.includes(vehicleId)) {
      zone.vehicles.push(vehicleId)
    }
  } else if (action === 'remove') {
    // Remove vehicle ID if it exists
    zone.vehicles = zone.vehicles.filter((id) => id !== vehicleId)
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Invalid action' })
  }

  await zone.save()
  res.status(StatusCodes.OK).json(zone)
}