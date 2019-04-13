var Controller = require('toto-api-controller');

var getSettings = require('./dlg/GetSettings');
var putSettings = require('./dlg/PutSettings');

var apiName = 'app-expenses';

var api = new Controller(apiName);

// APIs
api.path('GET', '/settings', getSettings);
api.path('PUT', '/settings', putSettings);

api.listen();
