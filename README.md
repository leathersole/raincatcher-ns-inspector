# RainCatcher Namespace inspector

## Install

```
npm install leathersole/raincatcher-ns-inspector
```

## Usage
```
var mediator = require('fh-wfm-mediator/lib/mediator');
var nsInspector = require('raincatcher-ns-inspector');

mediator.subscribe('wfm:user:create', function () { console.log('foo') });
nsInspector.inspect(mediator);
```

It outputs like this:
```
Namespace:  Subscribers: 0
Namespace: wfm Subscribers: 0
Namespace: wfm:user Subscribers: 0
Namespace: wfm:user:create Subscribers: 1
```
