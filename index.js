var argv    = require('minimist')(process.argv.slice(2)),
    bbox    = JSON.parse(argv.bbox ? argv.bbox : '[-180, -85, 180, 85]'),
    source  = argv._[0] || 'latest.planet.mbtiles',
    zoom    = argv.zoom ? parseInt(argv.zoom) : 12;

function usage() {
  console.log('Usage: node index.js --<options> <tileset>');
  console.log('node index.js --bbox="[-115, 32, -115, 32]" --zoom=9 tiles');
}

if(argv.help) usage();

