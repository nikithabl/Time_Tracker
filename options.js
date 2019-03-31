function save_options() {
  localStorage["history_size"] = document.getElementById("history_size").value;

  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

function restore_options() {
  var history_size = localStorage["history_size"];
  if (!history_size) {
    return;
  }
  document.getElementById("history_size").value = history_size;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
