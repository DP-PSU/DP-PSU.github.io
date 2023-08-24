// for (let i = 1; i <= 2; i++) {
//     document.getElementById(`expand-btn-${i}`).addEventListener("click", function() {
//         var expandedContent = document.getElementById(`expanded-content-${i}`);
//         expandedContent.classList.toggle("expanded");
//     });
// }

for (const btn of document.querySelectorAll(".expand-btn")) {
    btn.addEventListener("click", () => {
        btn.parentElement.parentElement.nextElementSibling.classList.toggle("expanded");
    });
}
  


// const addRowButton = document.getElementById('addRow');
// const addColumnButton = document.getElementById('addColumn');
// const deleteRowButton = document.getElementById('deleteRow');
// const deleteColumnButton = document.getElementById('deleteColumn');
// const table = document.getElementById('interactiveTable');

// addRowButton.addEventListener('click', () => {
//     const newRow = table.insertRow();
//     const columnsCount = table.rows[0].cells.length;

//     for (let i = 0; i < columnsCount; i++) {
//         newRow.insertCell();
//     }
// });

// addColumnButton.addEventListener('click', () => {
//     const rows = table.getElementsByTagName('tr');
//     for (let i = 0; i < rows.length; i++) {
//         rows[i].insertCell();
//     }
// });

// deleteRowButton.addEventListener('click', () => {
//     if (table.rows.length > 1) {
//         table.deleteRow(table.rows.length - 1);
//     }
// });

// deleteColumnButton.addEventListener('click', () => {
//     if (table.rows[0].cells.length > 1) {
//         const rows = table.getElementsByTagName('tr');
//         for (let i = 0; i < rows.length; i++) {
//             rows[i].deleteCell(rows[i].cells.length - 1);
//         }
//     }
// });
