function listChannels(channel) {
    if (channel) {
        process.stdout.write('Namespace: ' + channel.namespace);
        if (channel._subscribers && channel._subscribers != undefined) {
            console.log(' Subscribers: ' + channel._subscribers.length)
        } else {
            console.log('');
        }
        var keys = Object.keys(channel._channels);
        for (var key in channel._channels) {
            listChannels(channel._channels[key]);
        }
    }
}

var inspector = {
    inspect: function (mediator) {
        var c = mediator.getChannel('');
        listChannels(c);
    }
};

module.exports = inspector;
