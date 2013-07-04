/* ProDev
 * Boilerplate builder for hybrid production&#x2F;development servers.
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.ProDev = factory();
  }
}(this, function() {
    var ProDev = function(hashProduction) {
        var bool = true;
        
        if(typeof hashProduction == 'boolean') {
            bool  = hashProduction;
        } else if(typeof hashProduction == 'object') {
            for(var key in hashProduction) {
                var val = hashProduction[key],
                    flip;
                
                if(typeof val == 'boolean') {
                    switch(key) {
                        case 'dev':
                            flip = true;
                          break;
                        case 'development':
                            flip = true;
                          break;
                        case 'pro':
                            flip = false;
                          break;
                        case 'production':
                            flip = false;
                          break;
                    }
                    
                    if(typeof flip == 'boolean') {
                        bool = flip ? !val : val;
                        flip = -1;
                    }
                }
            }
        }
        
        return '(function(r){r.PRODUCTION=r.pro='+JSON.stringify(bool)+';r.DEVELOPMENT=r.dev='+JSON.stringify(!bool)+';}(this));';
    };
    
    return ProDev;
}));
