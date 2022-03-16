var tempArray;

$(document).ready(function() {
    $(function (){
      $('th#Row').click(function() {
        $(this).siblings().toggleClass('select');
      });
    });
  
    $(function () {
      $('th#Col').click(function () {
        var col = $(this).index();
            $("td").filter(":nth-child(" + (col + 1) + ")").toggleClass('select');
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