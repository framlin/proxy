var http = require('http'), httpProxy = require('http-proxy');

var proxy = httpProxy.createProxy();

var options = {  
		'www.framlin.com' : 'http://127.0.0.1:8080',
		'framlin.com' : 'http://127.0.0.1:8080',
		'www.framlin.de' : 'http://127.0.0.1:8080',
		'framlin.de' : 'http://127.0.0.1:8080',
		'www.framlin.info' : 'http://127.0.0.1:8081',
		'framlin.info' : 'http://127.0.0.1:8081',
		'www.wolfgang-egger.de' : 'http://127.0.0.1:8081',
		'wolfgang-egger.de' : 'http://127.0.0.1:8081',
		'www.oknevodu.com' : 'http://127.0.0.1:8082',
		'oknevodu.com' : 'http://127.0.0.1:8082',
		'www.bahnhofstrasse17-12555.de' : 'http://127.0.0.1:8082',
		'bahnhofstrasse17-12555.de' : 'http://127.0.0.1:8082',
		'www.mbaaba.de': 'http://127.0.0.1:8080',
		'mbaaba.de': 'http://127.0.0.1:8080',
		'www.cryptojs.info': 'http://127.0.0.1:8080',
		'cryptojs.info': 'http://127.0.0.1:8080',
		'www.cryptojs.com': 'http://127.0.0.1:8080',
		'cryptojs.com': 'http://127.0.0.1:8080',
		'www.cryptojs.net': 'http://127.0.0.1:8080',
		'cryptojs.net': 'http://127.0.0.1:8080',
		'www.cryptojs.org': 'http://127.0.0.1:8080',
		'cryptojs.org': 'http://127.0.0.1:8080',
		'www.framlin.org': 'http://127.0.0.1:8080',
		'framlin.org': 'http://127.0.0.1:8080'
}


proxy.on('error', function cbError(e) {
    console.log('Error from proxy: ' + e);
});

var httpServer = require('http').createServer(function(req, res) {  

  var hostname;
  
  if (typeof req.headers.host == 'string'){
	 hostname = req.headers.host.toLowerCase();

  	if (options[hostname]){
		proxy.web(req, res, {
     		  target: options[req.headers.host]
    		});
  	} else {
      		console.log("No Route for: " + req.headers.host);
  	}
  } else {
	console.log("Wrong Host-Type: " + req.headers.host);
  }

});

httpServer.listen(80);










