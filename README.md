# ready

----

[![spm version](http://spmjs.io/badge/ready)](http://spmjs.io/package/ready)
[![Build Status](https://secure.travis-ci.org/hotoo/ready.png?branch=master)](https://travis-ci.org/hotoo/ready)
[![Coverage Status](https://coveralls.io/repos/hotoo/ready/badge.png?branch=master)](https://coveralls.io/r/hotoo/ready)


Just Go you scripts after ready.

Support browsers:

* IE6+
* Firefox 2+
* Safari 3+
* Chrome *
* Opera *

## Install

```
$ spm install ready --save
```

## Usage

```js
var ready = require("ready");
ready(function(){
  console.log("DOM Ready!");
});
```

## API

### ready(Function handler)


## Thanks

* [requirejs/domReady](https://github.com/requirejs/domReady)
* [ded/domready](https://github.com/ded/domready)
