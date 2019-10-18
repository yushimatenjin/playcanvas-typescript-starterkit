// @ts-ignore
import { createScript, ScriptTypeBase } from "../utils/createScript";
import delay from "../utils/delay";

const attributes: Attributeses = {
  speed: {
    type: "number"
  },
  min: {
    type: "number"
  },
  max: {
    type: "number"
  },
  loop: {
    type: "boolean"
  },
  r:{
    type: "number",
    default : 30
  }
};
class Bound extends ScriptTypeBase {
  speed: number;
  min: number;
  max: number;
  loop: boolean;
  r: number

  initialize() {
    this.bound(this.entity, this.speed, this.min, this.max, this.loop, this.r);
  }

  async bound(
    entity: pc.Entity,
    speed: number,
    min: number,
    max: number,
    loop: boolean = false,
    r: number = 30
  ) {
    for (let i = min; i < max; i++) {
      entity.setLocalScale(i / r, i / r, i / r);
      await delay(speed);
    }

    for (let i = max; i > min; i--) {
      entity.setLocalScale(i / r, i / r, i / r);
      await delay(speed);
    }
    if (loop) return this.bound(entity, speed, min, max, loop, r);
  }
}

createScript(Bound, attributes);
