// Set current date at top of page
$("#currentDay").text(dayjs().format("dddd, MMMM D YYYY"));

// Set up time blocks
for (var hour = 9; hour <= 17; hour++) {
  var $timeBlock = $("<div>").addClass("row time-block");
  
  // Add hour label to time block
  var $hourLabel = $("<div>")
  .addClass("col-md-1 hour")
  .text(dayjs({ hour }).format("h A"));
  
  // Add description area to time block
  var $description = $("<textarea>")
  .addClass("col-md-10 description")
  .attr("id", `hour-${hour}`)
  .val(scheduleData[`hour-${hour}`] || "");
  
  // Add save button to time block
  var $saveBtn = $("<button>")
  .addClass("col-md-1 saveBtn")
  .html('<i class="fas fa-save"></i>');
  
  // Color time block based on past, present, or future
  if (dayjs().isSame(hour, "hour")) {
    $timeBlock.addClass("present");
  } else if (dayjs().isAfter(hour, "hour")) {
    $timeBlock.addClass("past");
  } else {
    $timeBlock.addClass("future");
  }
  
  // Add elements to time block row and add time block to page
  $timeBlock.append($hourLabel, $description, $saveBtn);
  $(".container").append($timeBlock);
}

// Save data when save button is clicked
$(".saveBtn").click(function () {
  var hr8 = document.getElementById('8').value;
  localStorage.setItem('text8', hr8);
  var hr9 = document.getElementById('9').value;
  localStorage.setItem('text9', hr9);
  var hr10 = document.getElementById('10').value;
  localStorage.setItem('text10', hr10);
  var hr11 = document.getElementById('11').value;
  localStorage.setItem('text11', hr11);
  var hr12 = document.getElementById('12').value;
  localStorage.setItem('text12', hr12);
  var hr13 = document.getElementById('13').value;
  localStorage.setItem('text13', hr13);
  var hr14 = document.getElementById('14').value;
  localStorage.setItem('text14', hr14);
  var hr15 = document.getElementById('15').value;
  localStorage.setItem('text15', hr15);
  var hr16 = document.getElementById('16').value;
  localStorage.setItem('text16', hr16);
  var hr17 = document.getElementById('17').value;
  localStorage.setItem('text17', hr17);
  
  var key = $description.attr("id");
  
  scheduleData[key] = value;
  localStorage.setItem("scheduleData", JSON.stringify(scheduleData));
});

// Load any saved data from LocalStorage
var saved8 = localStorage.getItem('text8');
document.getElementById('8').value = saved8;
var saved9 = localStorage.getItem('text9');
document.getElementById('9').value = saved9;
var saved10 = localStorage.getItem('text10');
document.getElementById('10').value = saved10;
var saved11 = localStorage.getItem('text11');
document.getElementById('11').value = saved11;
var saved12 = localStorage.getItem('text12');
document.getElementById('12').value = saved12;
var saved13 = localStorage.getItem('text13');
document.getElementById('13').value = saved13;
var saved14 = localStorage.getItem('text14');
document.getElementById('14').value = saved14;
var saved15 = localStorage.getItem('text15');
document.getElementById('15').value = saved15;
var saved16 = localStorage.getItem('text16');
document.getElementById('16').value = saved16;
var saved17 = localStorage.getItem('text17');
document.getElementById('17').value = saved17;
