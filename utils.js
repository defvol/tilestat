'use strict';

var _ = require('underscore');

exports.isFeature = function(propertyName) {
  return propertyName.startsWith('_') == false;
}

exports.getTags = function(properties) {
  return _.keys(properties).filter(this.isFeature);
}

exports.buildTagHash = function(tags) {
  var ones = _.map(tags, function(t) { return 1 });
  return _.object(tags, ones);
}

exports.updateTagHash = function(hash, tags) {
  tags.forEach(function(element) {
    hash[element] = (hash[element] || 0) + 1;
  });

  return hash;
}

exports.mergeTagHashes = function(hashes) {
  var merged = {};
  hashes.forEach(function(hash) {
    _.each(hash, function(value, key) {
      merged[key] = (merged[key] || 0) + value;
    });
  });

  return merged;
}

