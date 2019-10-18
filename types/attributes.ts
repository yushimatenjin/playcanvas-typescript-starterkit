type AttributeTypes =
  | "boolean"
  | "number"
  | "string"
  | "json"
  | "asset"
  | "entity"
  | "rgb"
  | "rgba"
  | "vec2"
  | "vec3"
  | "vec4"
  | "curv";

type Attributeses = {
  [key: string]: {
    type: AttributeTypes;
    array?: boolean;
    default?: any
  };
};
