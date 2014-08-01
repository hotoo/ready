
var win = window;
var doc = document;
var FALSE = false;
var isTop = win === top;

var handlers = [];
var documentElement = doc.documentElement;
var hack = documentElement.doScroll;

var domContentLoaded = "DOMContentLoaded";
var onreadystatechange = "onreadystatechange";
var addEventListener = "addEventListener";
var removeEventListener = "removeEventListener";
var attachEvent = "attachEvent";
var detachEvent = "detachEvent";
var load = "load";
var onload = "on" + load;
var readyState = "readyState";

var RE_DOMREADY = hack ? /^loaded|^c/ : /^loaded|c/;
var isDOMReady = RE_DOMREADY.test(doc[readyState]);

var readyHandler;

function flush(){
  if (isDOMReady){return;}
  isDOMReady = true;

  for(var i=0,l=handlers.length; i<l; i++){
    handlers[i]();
  }
}


if (doc[addEventListener]) {

  readyHandler = function (){
    doc[removeEventListener](domContentLoaded, readyHandler, FALSE);
    doc[removeEventListener](load, readyHandler, FALSE);
    flush();
  };

  doc[addEventListener](domContentLoaded, readyHandler, FALSE);
  doc[addEventListener](load, readyHandler, FALSE);

} else if (hack) {

  readyHandler = function (){
    if (/^c/.test(doc[readyState])){
      doc[detachEvent](onreadystatechange, readyHandler);
      doc[detachEvent](onload, readyHandler);
      flush();
    }
  };

  doc[attachEvent](onreadystatechange, readyHandler);
  doc[attachEvent](onload, readyHandler);

  var intervalID = win.setInterval(function(){
    try {
      documentElement.doScroll("left");

      win.clearInterval(intervalID);
      flush();
    } catch(ex) { }
  }, 30);
}

if (isDOMReady){
  flush();
}

module.exports = function(handler){
  if (isDOMReady) {
    handler();
  } else {
    handlers.push(handler);
  }
};
