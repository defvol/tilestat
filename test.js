'use strict';

var test = require('tap').test;

test('first stuff', function (t) {
  t.ok(true, 'true is ok')
  t.similar({a: [1,2,3]}, {a: [1,2,3]})
  t.end()
})

