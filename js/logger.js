var thisLog;
var thisJSON;


function logData() {
  var date = document.getElementById('date').value;
  console.log('date : ' + date);
  var startTime = document.getElementById('startTime').value;
  console.log("start time : " + startTime);
  var endTime = document.getElementById('endTime').value;
  console.log("end time : " + endTime);
  var type = document.getElementById('type').value;
  console.log("type : " + type);

  thisLog = {"date":date, "sTime":startTime, "eTime":endTime, "type":type};
  thisJSON = JSON.stringify(thisLog);

  localStorage.setItem("testJSON", thisJSON);
}

function downloadJSON() {
  console.log("Generating file...");
  download(thisJSON, 'timeLog.json', 'text/plain');
}

function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}
