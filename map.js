'use strict';

var utils = require('./utils');

module.exports = function(data, tile, writeData, done) {
  var tagMap    = {},
      osmLayer  = data.osmdata.osm;

  osmLayer.features.forEach(function(element, index) {
    var tags = utils.getTags(element.properties);
    tagMap = utils.updateTagMap(tagMap, tags);
  });

  done(null, tagMap);
};

