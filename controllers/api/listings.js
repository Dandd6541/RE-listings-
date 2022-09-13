
const Listing = require('../../models/listing');

module.exports = {
  create,
  index,
  updateListing,
  deleteListing,
  show
}; 

async function create(req, res) {
  const listing = await Listing.create(req.body);
  listing.user = req.user._id;
  listing.save();
  res.json(listing);
}

async function index(req, res) {
  const listing = await Listing.find({user: req.user._id})
   res.json(listing);
}


async function updateListing(req, res, next) {
  try {
    await Listing.findByIdAndUpdate(
      {_id: req.params.id},
      req.body,
    )
  const listing = await Listing.find({
      user: req.user._id });
      res.json(listing)
} catch (err) {
    return next(err); 
  } 
}

async function show(req, res) {
  const listing = await Listing.findOne({_id: req.body._id});
  res.json(listing);

}

async function deleteListing(req, res) {
  await Listing.findByIdAndDelete(req.params.id);
  
} 

  
