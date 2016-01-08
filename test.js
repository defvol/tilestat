'use strict';

var test  = require('tap').test,
    utils = require('./utils');

test('it finds out whether a prop is an OSM feature', function (t) {
  t.ok(utils.isFeature('highway'), 'highway is a feature');
  t.ok(!utils.isFeature('_changeset'), '_changeset is not a feature');
  t.end();
});

test('it extracts tags out of properties', function(t) {
  var props = { _changeset: 12859902, highway: 'residential' },
      got   = utils.getTags(props),
      want  = ['highway'];
  t.similar(got, want, 'should get a feature called highway');
  t.end();
});

test('it builds a hash of tag frequency', function(t) {
  var tags  = ['highway', 'amenity'],
      got   = utils.buildTagHash(tags),
      want  = { 'highway': 1, 'amenity': 1 };
  t.similar(got, want, 'should get a hash of tags with count set to 1');
  t.end();
});

test('it updates a hash of tag frequency', function(t) {
  var hash  = { 'highway': 1, 'amenity': 1 },
      tags  = ['amenity', 'landuse'],
      got   = utils.updateTagHash(hash, tags),
      want  = { 'highway': 1, 'amenity': 2, 'landuse': 1 };
  t.similar(got, want, 'should count frequency of tags');
  t.end();
});

test('it merges tag hashes', function(t) {
  var got = utils.mergeTagHashes([
        { 'highway': 1, 'amenity': 1 },
        { 'highway': 3, 'landuse': 1 }
      ]),
      want  = { 'highway': 4, 'amenity': 1, 'landuse': 1 };
  t.similar(got, want, 'should merge tag hashes');
  t.end();
});

test('it sort a tag hash', function(t) {
  var hash  = { 'highway': 1, 'amenity': 1, 'landuse': 3 },
      got   = utils.sortTagHash(hash),
      want  = { 'landuse': 3, 'highway': 1, 'amenity': 1 };
  t.similar(got, want, 'should sort tag hashes');
  t.end();
});

