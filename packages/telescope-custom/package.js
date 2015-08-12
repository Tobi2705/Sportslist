Package.describe({
  summary: 'Telescope custom package',
  version: '1.0.0',
  name: 'telescope-custom'
});

Package.onUse(function (api) {

  api.use('templating');
  api.use(['fourseven:scss', 'telescope:zeiss'], ['client']);


  api.addFiles('custom.css', 'client');
  api.addFiles('banner.html', 'client');
  api.addFiles('banner.js', 'client');
});
