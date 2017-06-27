'use strict';

module.exports = function(app) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
   */

  let dataSource = app.dataSources.mysql;
  let attachedModels = app.models()
    .filter(m => m.dataSource === dataSource)
    .map(m => m.modelName);

  app.dataSources.mysql.autoupdate(attachedModels, function(err) {
    if (err) throw err;
  });
};
