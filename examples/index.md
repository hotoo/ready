# Demo

---

## Normal usage

<pre id="output"></pre>

````javascript
var start = new Date().getTime();

seajs.use('index', function(ready) {
  var output = document.getElementById("output");
  ready(function(){
    output.innerHTML += "0. DOM Ready! " + (new Date().getTime() - start) + "ms\n";
  });
  ready(function(){
    output.innerHTML += "1. Do somethings. " + (new Date().getTime() - start) + "ms\n";
  });
  ready(function(){
    output.innerHTML += "2. Do otherthings. " + (new Date().getTime() - start) + "ms\n";
  });
});
````
