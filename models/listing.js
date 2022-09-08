const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  address: String,
  description: String,
  price: String,
},{
user: {type: Schema.Types.ObjectId, ref: 'User'},
},
{
  
  timestamps: true
});

module.exports = mongoose.model('Listing',listingSchema);
