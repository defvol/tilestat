'use strict';

module.exports = function(data, tile, writeData, done) {
  var count     = 0,
      osmLayer  = (data.osmdata.osm);

  osmLayer.features.forEach(function(element, index) {
    if (element.properties.hasOwnProperty('building')) count ++;
  });

  done(null, count);
};

