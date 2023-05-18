function createTable() {
    //Write your 
  var rowCount = parseInt(prompt('Input number of rows'));
  var columnCount = parseInt(prompt('Input number of columns'));

  var table = document.getElementById('myTable');
  table.innerHTML = '';

  for (var i = 0; i < rowCount; i++) {
    var row = document.createElement('tr');

    for (var j = 0; j < columnCount; j++) {
      var cell = document.createElement('td');
      cell.textContent = 'Row-' + i + ' Column-' + j;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}

  

