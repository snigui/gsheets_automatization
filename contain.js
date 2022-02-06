function contains() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  // MAKE SURE YOUR COLUMN NAMES ARE RIGHT, EDIT AS NEEDED
  var data = sheet.getRange('A1:A').getValues().filter(String);
  var liveData = sheet.getRange('B1:B').getValues().filter(String);
  //flattening it myself because someone had to do it smh
  data = (JSON.stringify(data)).replace(/\[*\]*"*/g,"")
  liveData = (JSON.stringify(liveData)).replace(/\[*\]*"*/g,"")
  //i had to learn regex again for this
  //i swear google should hire me at this point
  data = data.split(",")
  liveData = liveData.split(",")
  var missingData = []
  for (var i = 0; i < data.length; i++){
    if (!(liveData.includes(data[i]))){
      missingData.push([data[i]])
    }
  }
  console.log(missingData)
  console.log(liveData)
  var cell = sheet.getRange("C1:G"+(missingData.length+1));
  cell.clear()
  cell.setValues(missingData);
}
