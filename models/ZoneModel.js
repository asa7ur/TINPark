import mongoose from 'mongoose'

const ZoneSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    totalSpaces: {
      type: Number,
    },
    occupiedSpaces: {
      type: Number,
      default: 0,
      validate: {
        validator: function (v) {
          return v <= this.totalSpaces
        },
        message: 'Occupied spaces cannot exceed total spaces.',
      },
    },
    map: {
      type: String,
    },
    vehicles: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Vehicle',
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

ZoneSchema.virtual('freeSpaces').get(function () {
  return this.totalSpaces - this.occupiedSpaces
})

export default mongoose.model('Zone', ZoneSchema)
