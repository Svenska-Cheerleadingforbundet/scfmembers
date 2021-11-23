var express = require('express');
var router = express.Router();

const NodeGeocoder = require('node-geocoder');
const options = {
  provider: 'google',
  apiKey: 'AIzaSyBHEvEc7YtP0yIN3AvSUj-Fdvl-ZEnnKB0', // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};
const geocoder = NodeGeocoder(options);

/* GET users listing. */
router.get('/', async function(req, res, next) {
    var data = [{
        name: 'Hello',
        website: 'https://carinh.se',
        city: 'Järfälla',
        location: await geocoder.geocode('järfälla')
    },
    {
      name: 'Hello',
      website: 'https://carinh.se',
      city: 'Järfälla',
      location: await geocoder.geocode('göteborg')
  }
  ]
  res.json(data);
});

module.exports = router;
