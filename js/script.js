// DAY PLANNER HOMEWORK



//set time refresh at top of page
setInterval(function(){
var time = moment().format("hh:mm:ss");
$("#settime").text(time);
})


//shortcuts to parts of schedule


//Set global variables
var dayArray = ['','','','','','','','','',''];
var tempDayArray = [];





function getHour() {

}

function saveHour() {

}

function initDay() {
  
 // $('#1').css('background-color', 'rgb(234,234,234)');



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
  console.log(moment().format('H'));
  for (i=0; i<dayArray.length; i++) {
  
    if (20 < moment().format('H')) {
      $('#'+i).css('background-color', 'rgb(11,11,11)');
    } else if (i > moment().format('H')) {
      $('#'+i).css('background-color', 'rgb(11,11,11)');
    } else {
      $('#'+i).css('background-color', 'rgb(11,11,11)');
    }
  }
  }


  



initDay();



  //setup a click event on the save buttons
$('button').on("click", function(event){
  var hourInput;
  //var textfield = this.siblings();
  $(this).siblings().eq(1).attr('placeholder', 'testing!');
  hourInput = $(this).siblings().eq(1).val();
  //targets the correct spot in the dayArray to add the text
  dayArray[$(this).attr('id')] = hourInput;
  localStorage.setItem('dayArray', JSON.stringify(dayArray));
})




// var enteredTextField = $('#input8');
// enteredTextField.css('border-color','rgb(122, 242, 242)');
// var enteredTextValue = enteredTextField.val();
// console.log(enteredTextValue);

// topScoresArray.push(currentScoreObject);
// localStorage.setItem("initScore", JSON.stringify(topScoresArray));



      // using the event.target, traverse the dom from the button to the textarea
    // also grab a unique identifier for placing the hour input value into localStorage
  // on pageload, pull all data from local storage and use the unique labels/identifiers mentioned above to determine where to put the value retrieved from localStorage
  // for determining css backgroundcolor:
    // then iterate over all hour elements
    //use moment to get the current time (specifically the hour)
    // using an id/data attribute, determining what hour the current timeblock respresents (i.e the 'moment time')
      // if the current element time is: 
        // less than moment time, its grey
        // same as moment time, its red
        // greater than moment time, its green
