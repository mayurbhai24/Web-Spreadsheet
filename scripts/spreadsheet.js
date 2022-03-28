var itemsArray = new Array(); 

$(document).ready(function() {
    $(function (){
      $('th#Row').click(function() {
        var row = $(this).index();
        itemsArray = $(this).siblings().toggleClass('select').map(function() {
          return $(this).text();
      }).get();
      makeChart(itemsArray);
      });
    });

    $(function (){
      $('td').click(function () {
        var $this = $(this);
        var $input = $('<input>', {
        value: $this.text(),
         type: 'text',
         blur: function() {
            $this.text(this.value);
         },
         keyup: function(e) {
            if (e.which === 13) $input.blur();
         }
     }).appendTo( $this.empty() ).focus();
        $(this).toggleClass('select');
      });
    });
  
    $(function () {
      $('th#Col').click(function () {
        var col = $(this).index();
            itemsArray =  $("td").filter(":nth-child(" + (col + 1) + ")").toggleClass('select').map(function() {
              return $(this).text();
          }).get();
          makeChart(itemsArray);
            console.log(itemsArray);
      });
    });
  });


function deselectAll() {
    $(".spreadsheet td").css("background-color", "");

    tempArray = [];
}

function selectRow(rowIndex) {
    deselectAll();
    $("td").filter(":nth-child(" + (rowIndex + 1) + ")").toggleClass('select');
    tempArray = $("td").filter(":nth-child(" + (rowIndex + 1) + ")").toggleClass('select').map(function() {
        return $(this).text();
    }).get();
}

function selectColumn(colIndex) {
    deselectAll();
    $("td").filter(":nth-child(" + (colIndex + 1) + ")").toggleClass('select');
    tempArray = $("td").filter(":nth-child(" + (colIndex + 1) + ")").toggleClass('select').map(function() {
        return $(this).text();
    }).get();
}