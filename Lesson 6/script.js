const base_url = "https://api.balldontlie.io/v1"

async function takeData(endpoint) 
{
  const url = base_url + '/' + endpoint;
  let response = 
  fetch(url, {
      headers:
      {
        Authorization: "52765907-30d3-4ab7-a08a-7cd623acceac"
      }
  }).then(response => response.json());
  return response;
}

async function createTableWithData(endpoint)
{
  const header = document.getElementById("headName");
  header.innerText = endpoint;
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover');

  //get data
  let jsonData = await takeData(endpoint);
  
  // create thead
  const thead = document.createElement('thead');
  const theadRow = document.createElement('tr');
  Object.getOwnPropertyNames(jsonData.data[0]).forEach(element => {
    const th = document.createElement('th');
    th.innerText = element;
    theadRow.appendChild(th);
  });

  thead.append(theadRow);
  table.append(thead);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  // add data in table
  for (let i = 0; i < jsonData.data.length; i++)
  {
    const tr = document.createElement('tr');
    Object.getOwnPropertyNames(jsonData.data[0]).forEach(element => {
      const td = document.createElement('td');
      td.innerText = jsonData.data[i][element];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }
  
  return table;
}

const tablePlace = document.getElementById("tablePlace");
let table = createTableWithData('players').then(result => tablePlace.appendChild(result));