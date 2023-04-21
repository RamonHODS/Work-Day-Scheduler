// Set current date at top of page
$("#currentDay").text(dayjs().format("dddd, MMMM D YYYY"));

// Initialize schedule data object
var scheduleData = {};

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
$(".container").on("click", ".saveBtn", function () {
  var $description = $(this).siblings(".description");
  var key = $description.attr("id");
  var value = $description.val();
  
  scheduleData[key] = value;
  localStorage.setItem("scheduleData", JSON.stringify(scheduleData));
});

// Load any saved data from LocalStorage
var savedData = JSON.parse(localStorage.getItem("scheduleData")) || {};
for (var hour = 9; hour <= 17; hour++) {
  var key = `hour-${hour}`;
  var savedValue = savedData[key];
  $(`#${key}`).val(savedValue);
}
