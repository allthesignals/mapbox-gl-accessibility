Mapbox GL Accessibility Plugin
---

An accessibility control for [mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js).

__Note:__ This is a work in progress and we welcome contributions. See [issues](https://github.com/mapbox/mapbox-gl-accessibility/issues) to learn what needs to be worked on!

### Demo

<a href="https://vimeo.com/375772633/22ce0b9ed1" target="_blank"><img src="https://user-images.githubusercontent.com/6026447/69743104-b8655480-10f2-11ea-8621-f59e8e4f41ef.png" width=300></a>

1. Go to https://labs.mapbox.com/mapbox-gl-accessibility 
2. Enable voice-over in your browser
3. Press tab to hear the result

### Usage

```js
// Should be run after the map has been initialized

map.on('load', () => {
  map.addControl(new MapboxAccessibility({

    // A string value representing a property key in the data. This 
    // will be used as the text in voiceover.
    accessibleLabelProperty: 'name',

    // The layers within the style that
    // 1. Contain the `accessibleLabelProperty` value as a key
    // 2. Should be used for voiceover.
    layers: [
      'poi-scalerank4-l15',
      'poi-scalerank4-l1',
      'poi-scalerank3',
      'poi-scalerank2',
      'poi-scalerank1',
      'poi-parks_scalerank4',
      'rail-label'
    ]
  }));
});
```

### Developing

    yarn & yarn run start

Visit http://localhost:9966/example/ to load the demo
