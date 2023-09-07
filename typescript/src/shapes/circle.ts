import { Shape } from './shape.js';

export function newCircle(radius: number): Shape {
    radius
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}