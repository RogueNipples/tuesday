var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegexSafe = /^Objectively/;
  var botRegexSealSafe1 = /^You're fucking dead/;
  var botRegexSealSafe2 = /^What the fuck/;
  var botRegexGood = /good/;
  var botRegexBad = /bad/;
  var botRegexWrong = /wrong/;
  var botRegexRight = /right/;
  var botRegexEz = /ez/;
  var botRegexEasy = /easy/;
  var botRegexGay = /gay/;
  var botRegexFaggot = /faggot/;
  var botRegexSame = /same/;
  var botRegexSpag = /spaghetti/;
  var botRegexGreat = /great/;
  var botRegexHard = /hard/;
  var botRegexSeal = /jew/;

  if(request.name != "Cancer") {
  
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
    else if (request.text && botRegexEz.test(request.text)) {
    this.res.writeHead(200);
    postMessage("ez");
    this.res.end();
  }
    else if (request.text && botRegexEasy.test(request.text)) {
    this.res.writeHead(200);
    postMessage("easy");
    this.res.end();
  }
    else if (request.text && botRegexGay.test(request.text)) {
    this.res.writeHead(200);
    postMessage("gay");
    this.res.end();
  }
    else if (request.text && botRegexFaggot.test(request.text)) {
    this.res.writeHead(200);
    postMessage("a faggot");
    this.res.end();
  }
    else if (request.text && botRegexSame.test(request.text)) {
    this.res.writeHead(200);
    postMessage("same");
    this.res.end();
  }
    else if (request.text && botRegexHard.test(request.text)) {
    this.res.writeHead(200);
    postMessage("hard");
    this.res.end();
  }
    else if (request.text && botRegexSpag.test(request.text)) {
    this.res.writeHead(200);
    postMessage("spaghetti");
    this.res.end();
  }
    else if (request.text && botRegexGreat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("great");
    this.res.end();
  }
    else if (request.text && botRegexSeal.test(request.text)) {
    this.res.writeHead(200);
    postMessage2("What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life.");
    postMessage2("You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.");
      this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
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

function postMessage2(variable) {
  var botResponse, options, body, botReq;
        botResponse = variable;


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
