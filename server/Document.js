const { Schema, model } = require("mongoose")

// Define the Document schema
const documentSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
      default: {}, // Ensure there's a default empty object if no data is provided
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps automatically
    versionKey: false, // Removes the __v field, which tracks schema versioning
  }
)

// Export the Document model
module.exports = model("Document", documentSchema)
