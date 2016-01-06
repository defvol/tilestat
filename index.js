var argv    = require('minimist')(process.argv.slice(2)),
    bbox    = JSON.parse(argv.bbox ? argv.bbox : '[-180, -85, 180, 85]'),
    source  = argv._[0] || 'latest.planet.mbtiles',
    zoom    = argv.zoom ? parseInt(argv.zoom) : 12;

console.dir(bbox);
console.dir(source);
console.dir(zoom);

