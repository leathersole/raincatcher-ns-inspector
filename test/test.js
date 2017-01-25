var assert = require('assert');
var mediator = require('fh-wfm-mediator/lib/mediator');
var nsInspector = require('../lib/ns-inspector');

describe('Array', function () {
    it('should return -1 when the value is not present', function (done) {
        mediator.subscribe('wfm:user:create', function () { console.log('foo')});
        nsInspector.inspect(mediator);
        assert.equal(1, 1);
        done();
    });
});
