'use strict';

var _ = require('underscore');

exports.isFeature = function(propertyName) {
  return propertyName.startsWith('_') == false;
}

exports.getFeatures = function(properties) {
  return _.keys(properties).filter(this.isFeature);
}

