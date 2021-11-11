const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const progressBar = `<tr><td colspan="6"><div class="progress"><div class="indeterminate"></div></div></td></tr>`;
let table = document.getElementById('tbody');
getTable();

function getTable() {
  table.innerHTML = progressBar;
  $.ajax({
      url: BASE_URL
  }).done(showDataTable).fail(function (err) {
      console.log(err)
  })
}

function showDataTable(data) {
  let dataTable = ``;

  data.forEach(subData => {
    dataTable += `<tr>
      <th>${subData.id}</th>
      <td>${subData.name}</td>
      <td>${subData.username}</td>
      <td>${subData.email}</td>
      <td>
        ${subData.address.street}, 
        ${subData.address.suite}, 
        ${subData.address.city}
      </td>
      <td>${subData.company.name}</td>
    </tr>`
  });

  table.innerHTML = dataTable;
}