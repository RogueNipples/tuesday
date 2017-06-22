var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegex1 = /^Tendies\?$/;
  
  if(request.text && botRegex1.test(request.text)) {
    this.res.writeHead(200);
    postMessage1();
    this.res.end();
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

//==========================================================================================

function postMessage1() {
  var botResponse, options, body, botReq;

var date = Date();
var day = date.substr(0,3);
else if (day == "Mon")
{
var butts = "Nope, it's My Choice Monday";
}
else if (day == "Tue")
{
var butts = "It's Tendie Tuesday!";
}
else if (day == "Wed")
{
var butts = "Nope, it's Subwednesday";
}
else if (day == "Thu")
{
var butts = "Nope, it's Arby's Thursday";
}
else if (day == "Fri")
{
var butts = "Nope, it's Kentucky Friday Chiccen";
}
else
{
var butts = "It's the weekend, do whatever the fucc you want";
}
        botResponse = butts;


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

//==========================================================================================
function postMessage2(variable) {
  var botResponse, options, body, botReq;
  
var m,n,o;	
	
    var n = variable.lastIndexOf("er");
    if (variable.indexOf(" ", n) == -1) {
    m = variable.length;
    }
    else {
    var m = variable.indexOf(" ", n);
    }
    if (variable.lastIndexOf(" ", n) == -1) {
    o = 0;
    }
    else {
    var o = variable.lastIndexOf(" ", n);
    }
    var wordlength = m-o;
    var substring = variable.substr(o,wordlength);
    
    var finalstring = substring.concat("? I barely know her!")
	
        botResponse = finalstring;


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
//==========================================================================================



exports.respond = respond;
