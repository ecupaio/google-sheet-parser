
function parseSheet() {
  var sheetId;
  var apiKey;
  var sheet = 'Sheet1';
  var ranges;
  var dimension = 'ROWS';
  var output;
  var getUrl;

  sheetId = '1EZyJykUPkD8k2V_jZJP01_WZ2cWaVzljLkrBk2tHlhU';
  apiKey = 'AIzaSyBwTM311apUJJ7anHrw9M43b9dpcq5DCKY';
  dimension = 'ROWS';
  output = '#sheet-output';
  if (!ranges) {
    getUrl = 'https://sheets.googleapis.com/v4/spreadsheets/'+sheetId+'/values/'+sheet+'/?key='+apiKey+'&majorDimension='+dimension;
  } else {

  }
  $.ajax({
    url: getUrl,
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      if (!ranges) {
        values = data.values;
      }
    },
    error: function(data) {
      console.log(data.error.message);
    }
  });
}

(function ( $ ) {
    $.fn.googleDB = function( options ) {
        // Default options
        var settings = $.extend({
          sheetId: null,
          sheet: 'Sheet1',
          apiKey: null,
          dimension: 'rows',
          output: function(){}
        }, options );
        // Apply options
        var getUrl = 'https://sheets.googleapis.com/v4/spreadsheets/'+settings.sheetId+'/values/'+settings.sheet+'/?key='+settings.apiKey+'&majorDimension='+settings.dimension;
        $.ajax({
          url: getUrl,
          type: 'GET',
          dataType: 'json',
          success: function(data) {

            var values = data.values;

            console.log('success');
            console.log(values);

          },
          error: function(data) {
            console.log('error');
            console.log(data.error.message);
          }
        });

        return this;
    };
}( jQuery ));
$(document).googleDB({
  sheetId:'1EZyJykUPkD8k2V_jZJP01_WZ2cWaVzljLkrBk2tHlhU',
  apiKey: 'AIzaSyBwTM311apUJJ7anHrw9M43b9dpcq5DCKY'
});
