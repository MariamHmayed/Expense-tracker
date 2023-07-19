
function expenseItemElement(text) {
    return `<li>
      <span class="text">${text}</span>
      <span class="remove">&#128465</span>
      <input type="text" style="display: none;"/>
    </li>`
}

function addExpenseItem() {
    const expenseNameInput = $("#name");
    const expenseList = $("#expenseList");
  
    if (expenseNameInput.val().trim() === "") return;
  
    const expenseItemList = $(expenseItemElement(expenseNameInput.val()))
  
    expenseItemList.find(".remove").click(function () {
      expenseItemList.remove()
    })
}

var expenseName = $('#name').val();
var expenseAmount = $('#amount').val();
var newRow = $('<tr>');

var nameCell = $('<td>').text(expenseName);
var amountCell = $('<td>').text(expenseAmount);

newRow.append(nameCell);
newRow.append(amountCell);
$('#expenseTable').append(newRow);

   

    // function appen() {
    //   var a = $("#name").val();
    //   var b = $("#amount").val();
    //   $("#mytable tbody").append("<tr><td>" + a + "</td><td>" + b + "</td><td>") 
  
    // }
