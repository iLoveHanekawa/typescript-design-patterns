// support class for TextShape on page 148

import { Manipulator } from "../classAdapter/Manipulator.js";
import type { TextShape } from "./TextShape.js";

export class TextManipulator extends Manipulator {
    constructor(textShape: TextShape) {
        super();
    }
}