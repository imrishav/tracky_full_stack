const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: ['Please add text', true]
  },
  amount: {
    type: Number,
    required: ['Please Add Amount', true]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Transaction', TransactionSchema)
