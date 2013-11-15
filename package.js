Package.describe({
  summary: "jQuery-Knob smart package for Meteor "
});

Package.on_use(function (api, where) {
  api.add_files('page-js/index.js', 'client');
});
