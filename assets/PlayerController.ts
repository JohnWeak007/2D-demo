import { _decorator, Component, EventMouse, input, Input, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("NewComponent")
export class NewComponent extends Component {
  start() {
    input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
  }

  update(deltaTime: number) {}

  onMouseUp(event: EventMouse) {
    console.log("EventMouse", event);
    console.log("EventMouse", event._button);

    if (event._button === 0) {
    }
  }
}
