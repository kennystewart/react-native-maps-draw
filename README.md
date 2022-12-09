<div align="center">
  <img src="./drawes.gif" height="500" title="React Native Maps Draw Polygon"   alt="Accordion Animated" style="box-shadow: 0 20px 30px 3px rgba(9, 9, 16, 0.2);">
</div>

<br>
<br>

<h1 align="center">React Native Maps Draw (Polygon)</h1>
<p align="center">Interactive drawing of polygons on the map. Beta version</p>
<h6 align="center">Made with ❤️ by developer for developers</h6>


## Installation

```bash
yarn add @dev-event/react-native-maps-draw
# or
npm install @dev-event/react-native-maps-draw
```
> Also, you need to install [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) & [react-native-svg](https://github.com/react-native-community/react-native-svg), and follow theirs installation instructions.

## Usage

```tsx
import MapViewGestures from 'react-native-maps-draw';
import type { TTouchPoint } from 'react-native-maps-draw';
import MapView, { Polygon, Marker } from 'react-native-maps';

const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);

export default function App() {
  const mapRef = useRef<MapView>(null);

  const convertByPoint = async (item: any) =>
    await mapRef.current?.coordinateForPoint(item);

  const handlePolygon = useCallback(
    (_: any, index: number) => (
      <AnimatedPolygon
        key={index}
        coordinates={polygon.polygons}
        fillColor="rgba(255, 171, 171, 0.01)"
        strokeColor="rgba(255, 171, 171, 0.88)"
        strokeWidth={1}
      />
    ),
    [polygon.polygons]
  );


  return (
    <SafeAreaView style={styles.container}>
      <MapView ref={mapRef} style={styles.map} onMapReady={handleMapReady}>
        {...rest}
      </MapView>

      {... && (
        <MapViewGestures
          points={points}
          widthLine={3}
          colorLine={'green'}
          onEndDraw={handleCanvasEndDraw}
          onChangePoints={setPoints}
          backgroundCanvas={'rgba(0, 0, 0, 0.0)'}
          convertByPoint={convertByPoint}
        />
      )}
    </SafeAreaView>
  );
}
```

