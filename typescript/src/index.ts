import { newRenderer } from "./renderer.js"
import { newRectangle } from "./shapes/rectangle.js";
import { newCircle } from "./shapes/circle.js";
import { newSquare } from "./shapes/square.js";

const rectangle = newRectangle(2, 3)
const circle = newCircle(2)
const square = newSquare(2)

const rendererR = newRenderer(rectangle)
const rendererC = newRenderer(circle)
const rendererS = newRenderer(square)

rendererR.draw();
rendererC.draw();
rendererS.draw();