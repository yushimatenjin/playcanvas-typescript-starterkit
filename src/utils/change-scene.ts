
export default (sceneId: string, app: pc.Application, entity ) => {

    const loadScene =(id, callback) => {
        const url = id + ".json";
        app.loadSceneHierarchy(url, (err, parent) => {
          if (!err) {
            callback(parent);
          } else {
            console.error(err);
          }
        });
      };
    

  loadScene(sceneId, () => entity.root.children[0].destroy());
};
