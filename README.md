<div align="center">
  <img src="./draw.gif" height="500" title="React Native Maps Draw Polygon"   alt="Accordion Animated" style="box-shadow: 0 20px 30px 3px rgba(9, 9, 16, 0.2);">
</div>

<br>
<br>

<h1 align="center">React Native Maps Draw (Polygon)</h1>
<p align="center">Performance oriented React Native Accordion 60 FPS.  A simple component of a common use case of collapsible - a visible title with a collapsible view beneath it.</p>
<h6 align="center">Made with ❤️ by developer for developers</h6>

<br>
<p align="center">
<img src="http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square" alt="build"/>
<img src="https://img.shields.io/github/issues/dev-event/react-native-accordion" alt="build"/>
<img src="https://img.shields.io/bitbucket/pr-raw/dev-event/react-native-accordion" alt="build"/>
<img src="http://img.shields.io/:license-mit-blue.svg?style=flat-square" alt="build"/>
</p>



## Thanks
<p>Please, click on ⭐ button.</p>

# Documentation & Examples

- [Installation](#installation)
- [Motivation](#motivation)
- [Usage](#usage)
- [Props](#props)
- [Example](#example)
- [What's inside](#whats-inside)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## Installation

```bash
yarn add react-native-maps-draw
# or
npm install react-native-maps-draw
```
> Also, you need to install [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) & [react-native-svg](https://github.com/react-native-community/react-native-svg), and follow theirs installation instructions.

##  🦥 Motivation
- 💚 I love [React Native](https://reactnative.dev/)


Big love and gratitude to all people who are working on React Native, Expo and React Native Navigation!

## Usage

For more complete example open [App.tsx](https://github.com/dev-event/react-native-accordion)

```tsx

```




## Props

| name                 | description                                                                                         | required | type                                                                                                        | default          |
| -------------------- | --------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------| -----------------|
| `points`             | An array of x, y coordinates for the drawing of the polygon.                                        | YES      | [`TouchPoint[]`](https://github.com/dev-event/react-native-maps-draw/blob/features/draw/src/types/index.ts) | []               |
| `unitDistance`       | Distance unit                                                                                       | NO       | [`TouchPoint[]`](https://github.com/dev-event/react-native-maps-draw/blob/features/draw/src/maps/types.d.ts)| 'm'              |
| `colorLine`          | Drawing line color                                                                                  | NO       | string                                                                                                      | '#791679'        |
| `widthLine`          | Drawing line width                                                                                  | NO       | number                                                                                                      | 3                |
| `onEndDraw`          | Callback is called after drawing is complete                                                        | NO       | (item: IDrawResult) => void                                                                                 |                  |
| `isDrawMode`         | Draw mode enabled / disabled | NO                                                                   | YES      | boolean                                                                                                     | false            |
| `renderPath`         | Custom canvas for drawing                                                                           | NO       | (path: string) => JSX.Element                                                                               |                  |
| `onStartDraw`        | Callback is called when drawing starts                                                              | NO       | () => void                                                                                                  |                  |
| `createdPolygon`     | Polygon rendering modifier                                                                          | YES      | boolean                                                                                                     | true             |
| `onChangePoints`     | Callback returns x, y touches                                                                       | YES      | (points: TouchPoint[]) => void                                                                              |                  |
| `fillColorCanvas`    | Canvas background                                                                                   | NO       | string                                                                                                      | 'rgba(0,0,0,0.0)'|
| `backgroundCanvas`   | The background of the View element overlapping the map (zIndex: 1)                                  | NO       | string                                                                                                      | rgba(0,0,0,0.10) |

## 🎉 Example

Checkout the example [here](https://github.com/dev-event/react-native-accordion).


## 📖 What's inside
- [React Native Maps](https://github.com/wix/react-native-navigation) -  is a component system for maps that ships with platform-native code that needs to be compiled together with React Native.
- [React Native Svg](https://github.com/react-native-svg/react-native-svg) - provides SVG support to React Native on iOS and Android, and a compatibility layer for the web.


## ✌️ Contributing

Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

## Author

Reach out to me at one of the following places!

- E-mail <a href="#" target="_blank">effectwaater@gmail.com</a>
- Medium at <a href="https://medium.com/@effectwaaters" target="_blank">https://medium.com/@effectwaaters </a>
- Instagram at <a href="https://www.instagram.com/dev_event/" target="_blank">https://www.instagram.com/dev_event/ </a>


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
