import { View } from "./View.js";

export abstract class Window {
    constructor(contents: View) {}
    private GetView(): View { return new View(); }
}