/**
 * FirstSteps.js is the very basic program to send an command to the my home gateway with the help of myhome.js module
 */
/**
 * 
 */
var myhome = require('myhome');

// connect with the myhome gateway
var mhengine = new myhome.engine({
	host:'192.168.1.35',
	pass:'enterYourPassword'
});


//send light office out
mhengine.sendCommand({
command:'*1*0*11##'	
});


