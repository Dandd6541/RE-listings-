const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  address: { type: String, required: true },
  description: {type: String, required: true},
  price: { type: Number, required: true, default: 0 },
  user: {type: Schema.Types.ObjectId, ref: 'User' },
  
},  {
  timestamps: true
  
});

module.exports = mongoose.model('Listing',listingSchema);

