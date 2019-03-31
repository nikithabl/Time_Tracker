var tabId_re = /tabId=([0-9]+)/;
var match = tabId_re.exec(window.location.hash);
if (match) {
  var hist = chrome.extension.getBackgroundPage().History[match[1]];
  var table = document.createElement("table");
  for (var i=0; i < hist.length; i++) {
    var r = table.insertRow(-1);

    var date = "";
    if (i == hist.length - 1 ||
        (hist[i][0].toLocaleDateString() != hist[i+1][0].toLocaleDateString())) {
      date = hist[i][0].toLocaleDateString();
    }
    r.insertCell(-1).textContent = date;

    r.insertCell(-1).textContent = hist[i][0].toLocaleTimeString();

    var end_time;
    if (i == 0) {
      end_time = new Date();
    } else {
      end_time = hist[i-1][0];
    }
    r.insertCell(-1).textContent = FormatDuration(end_time - hist[i][0]);

    var a = document.createElement("a");
    a.textContent = hist[i][1];
    a.setAttribute("href", hist[i][1]);
    a.setAttribute("target", "_blank");
    r.insertCell(-1).appendChild(a);
  }
  document.body.appendChild(table);
}
