// for ie
var console = console || {log:function(){}};

// copy from O'reilly Javascript pattern p92
var App = App || {};

App.namespace = function(ns_string) {
    var parts = ns_string.split('.'),
    parent = App,
    i;
    if(parts[0] === 'App'){
        parts = parts.slice(1);
    }

    for (var i = 0; i < parts.length; i++) {
        if(typeof parent[parts[i]] === "undefined"){
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

App.namespace("App.base");
App.base = (function(){
  var Exposable = {
    expose: function(methodNames){
      var packed = {};
      var instance = this;
      _(methodNames).each(function(n){
        packed[n] = function(){
          return instance[n].apply(instance, packed[n].arguments);
        };
      });
      return packed;
    }
  };

  return {
    Exposable: Exposable
  }
}());

