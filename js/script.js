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
  //get dayArray from local storage
  tempDayArray = JSON.parse(localStorage.getItem('dayArray'));
  dayArray = tempDayArray;

  //loop statement to fill each hour from dayArray
  for (i=0; i<10; i++) {
    $('#'+i).children('input').attr('placeholder', dayArray[i]);
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

// Starting from `<div id="top">`, get a list of its sibling elements and target the fourth one (the `<ul>` element), and append an `<li>` to add "Classmates" to bottom of the list as a new resource.
//$('#top').siblings().eq(4).append($('<li>Classmates</li>'));


//     localStorage.setItem("dayArray", enteredTextField.val());
//     $(this).parent().css('background-color', 'rgb(122, 242, 242)');
// })


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
