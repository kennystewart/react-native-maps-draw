export * from 'react-native-maps';

export { default } from './maps';
export { OverlayPolygon } from './polygon';
// default types
export type {
    ILocationProps,
    IMapProps,
    IGestureCoordinates,
    IDrawResult,
} from './maps';
export type { IGestureProps } from './core/draw-control';
export type { ICanvasProps, IContainerSize } from './canvas';
export type { IPolygonProps } from './polygon';
export type { TouchPoint } from './types';
