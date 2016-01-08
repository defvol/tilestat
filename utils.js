'use strict';

var _ = require('underscore');

exports.isFeature = function(propertyName) {
  return propertyName.startsWith('_') == false;
}

exports.getTags = function(properties) {
  return _.keys(properties).filter(this.isFeature);
}

exports.buildTagMap = function(tags) {
  var ones = _.map(tags, function(t) { return 1 });
  return _.object(tags, ones);
}

exports.updateTagMap = function(map, tags) {
  tags.forEach(function(element) {
    map[element] = (map[element] || 0) + 1;
  });

  return map;
}

exports.mergeTagMaps = function(maps) {
  var merged = {};
  maps.forEach(function(map) {
    _.each(map, function(value, key) {
      merged[key] = (merged[key] || 0) + value;
    });
  });

  return merged;
}

