# tilestat
Get descriptive statistics for OSM QA Tiles.

Will run some basic calculations of OSM properties using TileReduce.

## Installing
```bash
npm install
```

## Running
```bash
✗ node index.js --bbox="[-115.55, 32.55, -115.34, 32.67]" --zoom=12 ../data/mexico.mbtiles
Starting up 2 workers... Job started.
Processing 6 tiles.
6 tiles processed in 0s.
894
```

## Testing
```bash
✗ npm test

> tilestat@0.0.1 test /Users/ro/c/osm-qa/tilestat
> tap test.js

test.js ............................................... 2/2
total ................................................. 2/2

  2 passing (527.543ms)

  ok
```

