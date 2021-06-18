
/*
	Source: https://www.tutorialspoint.com/javascript-sleep-function
*/

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


//USEAGE
sleep(Time in ms).then(() => {
//// code
});