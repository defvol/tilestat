'use strict';

var utils = require('./utils');

module.exports = function(data, tile, writeData, done) {
  var tagHash   = {},
      osmLayer  = data.osmdata.osm;

  osmLayer.features.forEach(function(element, index) {
    var tags = utils.getTags(element.properties);
    tagHash = utils.updateTagHash(tagHash, tags);
  });

  done(null, tagHash);
};

