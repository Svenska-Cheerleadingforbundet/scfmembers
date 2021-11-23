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
    member.location = await geocoder.geocode(member.Kommun);
    member.key = member['E-post']+member.Kommun;
    return member;
  }));

  res.json(withLocations);
});

module.exports = router;
