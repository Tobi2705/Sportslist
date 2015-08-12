Package.describe({
  summary: "Telescope sportslist",
  version: '0.1.0',
  name: "telescope-sportslist"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'telescope-theme-zeiss'], ['client']);

  api.addFiles([
    'lib/client/stylesheets/screen.scss',
  ], ['client']);

});
