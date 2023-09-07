import { Shape } from './shape.js';

export function newSquare(sideLen: number): Shape {
    sideLen
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}