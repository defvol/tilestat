[![Build Status](https://travis-ci.org/rodowi/tilestat.svg)](https://travis-ci.org/rodowi/tilestat)

# tilestat
Get descriptive statistics of OSM QA tilesets.

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
{ 'tower:type': 1,
...
...
...
 operator: 806,
  'addr:postcode': 848,
  'addr:street': 873,
  building: 894,
  oneway: 1019,
  amenity: 1171,
  source: 2907,
  name: 3038,
  highway: 7796 }

```

## Testing
```bash
✗ npm test

> tilestat@0.0.1 test /Users/ro/c/osm-qa/tilestat
> tap test.js

test.js ............................................... 7/7
total ................................................. 7/7

  7 passing (579.192ms)

  ok
```
