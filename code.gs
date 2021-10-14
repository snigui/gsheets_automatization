function linkCols() {
  /* this function connects two ranges of same order and size n:
     col A[0,n) <-> col B[0,n)
     based on index i from [0,n)
     and utilizes a picker array defines a set of values from col A that 
     correspond to values in col B based on i
     finally, it loops through col B and the picker array
     to get corresonding col B values from each col A value 
     from the picker array 
   */
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getActiveSheet();
  /* range here is the cell values we are interested in for a particular col E */
  var colE = sh.getRange('E190:E257');
  var all = colE.getValues();
  /* range1 here is the cell values we are interested in linking with values 
  from col E */
  var colB = sh.getRange('B190:B257');
  var names = colB.getValues();
  /* range2 here is the specific values we are interested in that we will use to pick values from range1 */
  var colJ = sh.getRange('J164:J199');
  var pickerArray = colJ.getValues();
  for (var i=0;i<names.length;i++){
  var email = all[i][0];
    for (var j=0; j<pickerArray.length;j++){
      if (pickerArray[j][0] == email){
        var absent = names[i];
        sh.appendRow(absent);
      }
    }
  }
}
