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
  // Setup result hash with first hash
  var merged = hashes[0];
  // and start looping after the second hash
  hashes.slice(1).forEach(function(hash) {
    _.each(hash, function(value, key) {
      merged[key] = (merged[key] || 0) + value;
    });
  });

  return merged;
}

exports.sortTagHash = function(hash) {
  // Sort hash keys by their value
  var sortedKeys = _.sortBy(_.keys(hash), function(key) {
    return hash[key];
  });

  return _.object(sortedKeys, _.map(sortedKeys, function(key) {
    return hash[key];
  }));
}

