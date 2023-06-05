  //
  $(document).ready(function () {
    $('.saveBtn').on('click', function() {
        //setting up variables so that when the user presses the save button, it will take what is 
        // in the div and save it to the local storage
        var textValue = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, textValue);
    });
    function hourUpdater() {
      var currentHour = dayjs().hour();
      // loop over time blocks
      console.log(currentHour);
     
      // after looping over the time blocks this function compare the local time to the blockhour var
      // to determine if each block should be given a class of past present or future
      $('.time-block').each(function () {
         // parseint attr split, time-block 
         var blockHour= parseInt($(this).attr('id').split('-')[1]);
         console.log(blockHour);
         //add remove classes for past present 
         if (blockHour < currentHour){
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
         } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
         } else {
            $(this).addClass('future');
            $(this).removeClass('past');
            $(this).removeClass('present');
         }
      });
    }
    // calling the hourupdater function and setting the interval for 15 seconds
    hourUpdater();
    setInterval(hourUpdater, 15000);
    // load any saved data from localStorage
    // could have a for loop instead 'hour-' +i+ '.description'
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    //get items for all hours
    // display current day on page
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
    
  });
 