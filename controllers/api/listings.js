const { deleteModel } = require('mongoose');
const Listing = require('../../models/listing');

module.exports = {
  create,
  index,
  show,
  deleteListing
}; 

async function create(req, res) {
  req.body.user = req.user._id;
  const listing = await Listing.create(req.body);
  res.json(listing);
}

async function index(req, res) {
  const listing = await Listing.find({user: req.user._id})
   res.json(listing);

}

async function show(req, res) {
  const listing = await Listing.findOne({address: req.body.address});
  res.json(listing);

}

async function deleteListing(req, res) {
  await Listing.findByIdAndDelete(req.params._id);
  res.json(deleted);
}

  
