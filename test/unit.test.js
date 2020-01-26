import test from 'tape';
import mapboxgl from 'mapbox-gl-js-mock';
import MapboxAccessibility from '../';

/**
 * Smoke tests
 */
test('it asserts', (t) => {
  t.plan(1);

  t.ok(true);
});

test('it imports', (t) => {
  t.plan(1);

  t.ok(MapboxAccessibility);
});

test('it instantiates', (t) => {
  t.plan(1);

  t.ok(new MapboxAccessibility({
    layers: [],
  }));
});

test('it injects', (t) => {
  t.plan(1);

  const Accessibility = new MapboxAccessibility({});
  const map = new mapboxgl.Map({
    container: document.createElement('div'),
    style: 'mapbox://styles/mapbox/streets-v8',
  });
  map.addControl(Accessibility);

  t.ok(map);
});
