#!/usr/bin/env node

'use strict';

var utils = require('./utils');

var argv    = require('minimist')(process.argv.slice(2)),
    bbox    = JSON.parse(argv.bbox ? argv.bbox : '[-180, -85, 180, 85]'),
    path    = require('path'),
    source  = argv._[0] || 'latest.planet.mbtiles',
    tagHash  = {},
    tileReduce = require('tile-reduce'),
    zoom    = argv.zoom ? parseInt(argv.zoom) : 12;

function usage() {
  console.log('Usage: node index.js --<options> <tileset>');
  console.log('node index.js --bbox="[-115, 32, -115, 32]" --zoom=9 tiles');
}

if(argv.help) usage();

tileReduce({
  bbox: bbox,
  zoom: zoom,
  map: path.join(__dirname, '/map.js'),
  sources: [
    {
      name: 'osmdata',
      mbtiles: source,
      layers: ['osm']
    }
  ]
})
.on('reduce', function(result) {
  tagHash = utils.mergeTagHashes([tagHash, result]);
})
.on('end', function(error) {
  console.log(utils.sortTagHash(tagHash));
});
