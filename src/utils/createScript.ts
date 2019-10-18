export const createScript = (App: any, attributeses?: Attributeses) => {
  const name = App.name.toLowerCase();
  const app: any = pc.createScript(name);
  if (attributeses !== undefined) {
    for (let [name, attributes] of Object.entries(attributeses)) {
      console.log(name, attributes);
      app.attributes.add(name, attributes);
    }
  }
  Object.setPrototypeOf(app.prototype, App.prototype);
  return app;
};

export class ScriptTypeBase {
  entity: pc.Entity;
  app: pc.Application;
  attributes: {};
  attach() {}
  on() {}
  off() {}
  fire() {}
  once() {}
  set() {}
}
