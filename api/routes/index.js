var express = require('express');
var router = express.Router();
var axios = require('axios');
const NodeGeocoder = require('node-geocoder');
const options = {
  provider: 'google',
  apiKey: 'AIzaSyBHEvEc7YtP0yIN3AvSUj-Fdvl-ZEnnKB0'
};
const geocoder = NodeGeocoder(options);

router.get('/', async function(req, res, next) {
  var members = await axios.get(`https://cheerleading.azurewebsites.net/members`)
    .then(response => {
      return response.data;
    });

  var withLocations = await Promise.all(members.map(async (member) => {
    member.location = await geocoder.geocode(member.city);
    return member;
  }));

  var transferLocations = withLocations.map((member) => {
    member.latitude = member.location[0].latitude;
    member.longitude = member.location[0].longitude;
    return member;
  })

  res.json(transferLocations);
});

module.exports = router;
