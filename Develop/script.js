// Set current date at top of page
$("#currentDay").text(dayjs().format("dddd, MMMM D YYYY"));

// Load any saved data from LocalStorage
var scheduleData = JSON.parse(localStorage.getItem("scheduleData")) || {};

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
    .html('<i class="far fa-save"></i>');

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
$(".saveBtn").on("click", function () {
  var $description = $(this).siblings(".description");
  var key = $description.attr("id");
  var value = $description.val().trim();

  scheduleData[key] = value;
  localStorage.setItem("scheduleData", JSON.stringify(scheduleData));
});

