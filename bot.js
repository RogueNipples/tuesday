var HTTPS = require('https');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegex1 = /^Tendies\?$/;
  var botRegex2 = /^tendies\?$/;
  var botRegex3 = /^Menu\?$/;
  var botRegex4 = /^menu\?$/;
  
  if(request.text && botRegex1.test(request.text)) {
    this.res.writeHead(200);
    postMessage1();
    this.res.end();
  }
  else if(request.text && botRegex2.test(request.text)) {
    this.res.writeHead(200);
    postMessage1();
    this.res.end();
  }
  else if(request.text && botRegex3.test(request.text)) {
    this.res.writeHead(200);
    postMessage2("Monday: Whatever you want\nTuesday: Tendies\nWednesday: Subway\nThursday: Arby's\nFriday: KFC");
    this.res.end();
  }
  else if(request.text && botRegex4.test(request.text)) {
    this.res.writeHead(200);
    postMessage2("Monday: Whatever you want\nTuesday: Tendies\nWednesday: Subway\nThursday: Arby's\nFriday: KFC");
    this.res.end();
  }
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
if (day == "Mon")
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

//==================

function postMessage2(input) {
  var botResponse, options, body, botReq;

        botResponse = input;


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
