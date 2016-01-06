'use strict';

var test  = require('tap').test,
    utils = require('./utils');

test('it finds out whether a prop is an OSM feature', function (t) {
  t.ok(utils.isFeature('highway'), 'highway is a feature')
  t.ok(!utils.isFeature('_changeset'), '_changeset is not a feature')
  t.end()
})

test('it extracts features out of properties', function(t) {
  var props = { _changeset: 12859902, highway: 'residential' },
      got   = utils.getFeatures(props),
      want  = ['highway'];
  t.similar(got, want, 'should get a feature called highway');
  t.end()
})

