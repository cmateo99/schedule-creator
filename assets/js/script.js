// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {

dayjs.extend(window.dayjs_plugin_advancedFormat);
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
dayjs().format()
$('.saveBtn').on('click', function () { 
  var txtItem = $(this).siblings('textarea').val();
  console.log(txtItem)
  var tBlock = $(this).parent().attr('id');
  localStorage.setItem(tBlock,txtItem);
})
  var currentDay = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDay);

  // TODO: Add a listener for click events on the save button. This code should

  // TODO: Add code to apply the past, present, or future class to each time

  $('.time-block').each(function () {
    var currentBlock = $(this).attr('id');
    var storedText = localStorage.getItem(currentBlock);
    $(this).find('textarea').val(storedText);

  
    var hrs = dayjs().tz('America/Los_Angeles').hour();
    console.log("HRS"+hrs)
    var presentHr = parseInt($(this).attr("id").split("-")[1]);
    console.log(presentHr)
    if (presentHr<hrs){
      $(this).removeClass('present future').addClass('past');
    } else if (presentHr===hrs) {
      $(this).removeClass('past future').addClass('present')
    } else{
      $(this).removeClass('past present').addClass('future');
    }
  });


  // TODO: Add code to get any user input that was saved in localStorage and set
  
    
});
