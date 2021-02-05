function addRow() {
  let table = document.getElementById("table");
  let row = table.insertRow(table.rows.length);

  let cell1 = row.insertCell(0);
  let element1 = document.createElement("input");
  element1.type = "checkbox";
  cell1.appendChild(element1);

  let cell2 = row.insertCell(1);
  let element2 = document.createElement("input");
  element2.type = "text";
  cell2.appendChild(element2);
}

function deleteRow() {
  try {
    let table = document.getElementById("table");

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      let chckb = row.cells[0].childNodes[0];
      if (chckb != null && chckb.checked == true) {
        table.deleteRow(i);
        i--;
      }
    }
  } catch (e) {
    alert(e);
  }
}
