const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const progressBar = `<tr><td colspan="6"><div class="progress"><div class="indeterminate"></div></div></td></tr>`;
let table = document.getElementById('tbody');
getTable();

function getTable() {
  table.innerHTML = progressBar;
  /* AJAX with JQuery */
  /* $.ajax({
      url: BASE_URL
  }).done(showTable).fail(function (err) {
      console.log(err)
  }) */
  /* AJAX with XML HTTP Request */
  const xhr = new XMLHttpRequest();
  xhr.open('GET', BASE_URL);
  xhr.onload = function handleSuccess() {
    let data = JSON.parse(this.responseText);
    showTable(data);
  };
   xhr.onerror = function handleError() {
       console.log('Ups, Failed to load data :(')
   };
   xhr.send();
  /* AJAX with Fetch API */
  /* fetch(BASE_URL)
   .then(function (response) {
     return response.json()
   })
   .catch(function (err) {
     console.log(`Ups, ${err} :(`)
   })
   .then(showTable) */
}

function showTable(data) {
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