let massMark = [0, 0, 0, 0];


function changeColorColumn()
{
    const table = document.querySelector(".table");
    const rows = table.getElementsByTagName("tr");
    for(let i = 1; i < rows.length; i++)
    {
        const cols = rows[i].getElementsByTagName("td");
        switch (cols[cols.length-1].innerText)
        {
            case "5":
                massMark[massMark.length-1]++;
                rows[i].classList.add("table-success");
                break;
            case "3":
                massMark[1]++;
                rows[i].classList.add("table-warning");
                break;
            case "2":
                massMark[0]++;
                rows[i].classList.add("table-danger");
        }
    }
}

function countMarkInTable(){
    const cols = document.querySelectorAll(".row > .col-xxl-3 > h4");
    for (let i = 0; i < massMark.length; i++)
    {
        if (massMark[i] > 0)
        {
            const bage = document.createElement("span");
            bage.classList.add("badge", 'ms-2', 'rounded-pill');
            switch (i)
            {
                case 0:
                    bage.classList.add('text-bg-danger');
                    bage.innerText = massMark[0];
                    cols[2].appendChild(bage);
                    break;
                case 1:
                    bage.classList.add('text-bg-warning');
                    bage.innerText = massMark[1];
                    cols[1].appendChild(bage);
                    break;
                case 3:
                    bage.classList.add('text-bg-success');
                    bage.innerText = massMark[3];
                    cols[0].appendChild(bage);
                    break;
            } 
        }
    }
}

changeColorColumn();
countMarkInTable();