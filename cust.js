

var rIndex,
                table = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    fname = document.getElementById("company name").value,
                    lname = document.getElementById("tel").value,
                    age = document.getElementById("company address").value,
                    ename = document.getElementById("email").value,
                    iname = document.getElementById("items").value,
                    aname = document.getElementById("amount").value,
                    dname = document.getElementById("date").value;
            
                if(fname === ""){
                    alert("Company Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(lname === ""){
                    alert("Company Number Connot Be Empty");
                    isEmpty = true;
                }
                else if(age === ""){
                    alert("Address Connot Be Empty");
                    isEmpty = true;
                }
                else if(ename === ""){
                    alert("Email Connot Be Empty");
                    isEmpty = true;
                }
                else if(iname === ""){
                    alert("items Connot Be Empty");
                    isEmpty = true;
                }
                else if(aname === ""){
                    alert("Amount Connot Be Empty");
                    isEmpty = true;
                }
                else if(dname === ""){
                    alert("Date Connot Be Empty");
                    isEmpty = true;
                }

                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    cell6 = newRow.insertCell(5),
                    cell7 = newRow.insertCell(6),
                    fname = document.getElementById("company name").value,
                    lname = document.getElementById("tel").value,
                    age = document.getElementById("company address").value
                    ename = document.getElementById("email").value,
                    iname = document.getElementById("items").value,
                    aname = document.getElementById("amount").value,
                    dname = document.getElementById("date").value;            
                cell1.innerHTML = fname;
                cell2.innerHTML = lname;
                cell3.innerHTML = age;
                cell4.innerHTML = ename;
                cell5.innerHTML = iname;
                cell6.innerHTML = aname;
                cell7.innerHTML = dname;
                // call the function to set the event to the new row
                selectedRowToInput();
            }
            }
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("company name").value = this.cells[0].innerHTML;
                      document.getElementById("tel").value = this.cells[1].innerHTML;
                      document.getElementById("company address").value = this.cells[2].innerHTML;
                      document.getElementById("email").value = this.cells[3].innerHTML;
                      document.getElementById("items").value = this.cells[4].innerHTML;
                      document.getElementById("amount").value = this.cells[5].innerHTML;
                      document.getElementById("date").value = this.cells[6].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var fname = document.getElementById("company name").value,
                    lname = document.getElementById("tel").value,
                    age = document.getElementById("company address").value,
                    ename = document.getElementById("email").value,
                    iname = document.getElementById("items").value,
                    aname = document.getElementById("amount").value,
                    dname = document.getElementById("date").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = fname;
                table.rows[rIndex].cells[1].innerHTML = lname;
                table.rows[rIndex].cells[2].innerHTML = age;
                table.rows[rIndex].cells[3].innerHTML = ename;
                table.rows[rIndex].cells[4].innerHTML = iname;
                table.rows[rIndex].cells[5].innerHTML = aname;
                table.rows[rIndex].cells[6].innerHTML = dname;
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("comapny name").value = "";
                document.getElementById("tel").value = "";
                document.getElementById("company addres").value = "";
                document.getElementById("email").value = "";
                document.getElementById("items").value = "";
                document.getElementById("amount").value = "";
                document.getElementById("date").value = "";
            }
/*Filter*/
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
//filter




