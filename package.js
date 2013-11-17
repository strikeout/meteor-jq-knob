Package.describe({
    summary: "jQuery-Knob, the touch-friendly dial control"
});

Package.on_use(function(api, where) {
    api.add_files('lib/js/jquery.knob.js', 'client');
});
