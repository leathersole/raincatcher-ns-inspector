var assert = require('assert');
var mediator = require('fh-wfm-mediator/lib/mediator');
var nsInspector = require('../lib/ns-inspector');

it('should output 4 namespaces', function (done) {
    mediator.subscribe('wfm:user:create', function () { console.log('foo') });
    nsInspector.inspect(mediator);
    done();
});
