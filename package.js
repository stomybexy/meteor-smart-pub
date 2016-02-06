Package.describe({
    name: 'jonatan:smart-pub',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Make publications qqueries available as Meteor methods.',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.1');

    api.use('ecmascript');
    api.use('underscore');

    api.use('reywood:publish-composite@1.4.2', 'server');

    api.addFiles('smart-pub.js');
    api.export('SmartPub', ['client', 'server']);
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('jonatan:smart-pub');
    api.addFiles('smart-pub-tests.js');
});
