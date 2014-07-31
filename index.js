
var win = window;
var doc = document;

var handlers = [];

var isTop = self === top;
var documentElement = doc.documentElement;
var hack = documentElement.doScroll;

var domContentLoaded = "DOMContentLoaded";
var onreadystatechange = "onreadystatechange";
var addEventListener = "addEventListener";
var attachEvent = "attachEvent";
var load = "load";
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

function checkReady(){
  try {
    documentElement.doScroll("left");
  } catch(ex) {
    return setTimeout(checkReady, 50);
  }
  flush();
}

if (doc[addEventListener]) {

  readyHandler = function (){
    doc.removeEventListener(domContentLoaded, readyHandler, false);
    flush();
  };

  doc[addEventListener](domContentLoaded, readyHandler, false);
  doc[addEventListener](load, readyHandler, false);

} else if (hack) {

  readyHandler = function (){
    if (/^c/.test(doc[readyState])){
      doc.detachEvent(onreadystatechange, readyHandler);
      flush();
    }
  };

  doc[attachEvent](onreadystatechange, readyHandler);
  doc[attachEvent]("on" + load, readyHandler);

  checkReady();
}

if (isDOMReady){
  flush();
}

var domready = function(handler){
  isDOMReady ? handler() : handlers.push(handler);
};

module.exports = domready;
