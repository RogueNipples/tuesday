var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegexGood = /good/;
  var botRegexBad = /bad/;
  var botRegexWrong = /wrong/;
  var botRegexRight = /right/;

  if(request.text && botRegexGood.test(request.text)) {
    this.res.writeHead(200);
    postMessage("good");
    this.res.end();
  } 
  else if (request.text && botRegexBad.test(request.text)) {
    this.res.writeHead(200);
    postMessage("bad");
    this.res.end();
  }
  else if (request.text && botRegexWrong.test(request.text)) {
    this.res.writeHead(200);
    postMessage("wrong");
    this.res.end();
  }
  else if (request.text && botRegexRight.test(request.text)) {
    this.res.writeHead(200);
    postMessage("right");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(variable) {
  var botResponse, options, body, botReq;
  var Obj = "Objectively "
        botResponse = Obj.concat(variable);


  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
