// DAY PLANNER HOMEWORK



//set time refresh at top of page
setInterval(function(){
var time = moment().format("h:mm");
$("#time").text(time);
})

setInterval(function(){
  var day = moment().format("LL");
  $("#currentDay").text(day);
  })


//Set global variables
var dayArray = ['','','','','','','','','',''];
var tempDayArray = [];




function initDay() {
  
  //get dayArray from local storage
  tempDayArray = JSON.parse(localStorage.getItem('dayArray'));

  //check if there is any array in local storage
  if (tempDayArray !== null) {
  dayArray = tempDayArray;
  }

  //loop statement to fill each hour from dayArray
  for (i=0; i<dayArray.length; i++) {
    $('#'+i).children('input').attr('placeholder', dayArray[i]);
    }
  
  //color each block based on time of day
  for (i=0; i<dayArray.length; i++) {
  
    if (i+8 < moment().format('H')) {
      $('#'+i).css('background-color', '#50B53F'); //row color if in past
      $('#'+i).children('input').css('background-color','#D0FFC9');
      $('#'+i).children('button').css('background-color','#50B53F');
    } else if (i+8 > moment().format('H')) {
      $('#'+i).css('background-color', '#bebebe'); //row color if in future
      $('#'+i).children('input').css('background-color','#D6D6D6');
      $('#'+i).children('button').css('background-color','#bebebe');
    } else if (i+8 == moment().format('H')) {
      $('#'+i).css('background-color', '#E97962'); //row color is in present
      $('#'+i).children('input').css('background-color','#EFC0B9');
      $('#'+i).children('button').css('background-color','#E97962');
    }
  }
  }


  


//function called on page load. Initializes schedule.
initDay();



//listens for clicks on any of the save buttons
$('button').on("click", function(event){
  var hourInput;
  
  //receives data from field saves to variable
  hourInput = $(this).siblings().eq(1).val();
  
  //targets the correct spot in the dayArray to add the text
  dayArray[$(this).attr('id')] = hourInput;

  //sets new data to local storage
  localStorage.setItem('dayArray', JSON.stringify(dayArray));
})