const base_url = "https://api.balldontlie.io/v1"

async function takeData(endpoint) 
{
  let url = base_url + '/' + endpoint;
  if (endpoint === "games")
    url += '?seasons[]=2024';
  let response = 
  fetch(url, {
      headers:
      {
        Authorization: "52765907-30d3-4ab7-a08a-7cd623acceac"
      }
  }).then(response => response.json());
  return response;
}

async function removeTable() {
  const tablePlace = document.getElementById("tablePlace");
  if (tablePlace.firstChild != null)
    tablePlace.removeChild(tablePlace.firstChild);
}

async function createTableWithData(endpoint)
{
  removeTable();
  const header = document.getElementById("headName");
  header.innerText = endpoint;
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover');

  //get data
  let jsonData = await takeData(endpoint);
  console.log(jsonData);
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
      if (typeof(jsonData.data[i][element]) == 'object' && jsonData.data[i][element] != null)
        td.innerText = jsonData.data[i][element]['name'];
      else
        td.innerText = jsonData.data[i][element];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }

  const tablePlace = document.getElementById("tablePlace");
  tablePlace.appendChild(table);
}


createTableWithData('players');