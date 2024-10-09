let massMark = [0, 0, 0, 0];

function addEventListenerForDelete() {
    const delButtons = document.querySelectorAll(".btn-danger");
    const tbodyWithStudent = document.querySelector('#students > tbody');
    delButtons.forEach((element) => element.addEventListener('click', (event) => {
        tbodyWithStudent.removeChild(event.target.closest("tr"));
        countMarkInTable();
        addBadgeWithCountMark();
    }));
}

function changeColorColumn() {
    const table = document.querySelector(".table");
    const rows = table.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        const cols = rows[i].getElementsByTagName("td");
        switch (cols[cols.length - 2].innerText) {
            case "5":
                rows[i].classList.add("table-success");
                break;
            case "3":
                rows[i].classList.add("table-warning");
                break;
            case "2":
                rows[i].classList.add("table-danger");
        }
    }
}

function countMarkInTable() {
    const table = document.querySelector(".table");
    const rows = table.getElementsByTagName("tr");
    massMark = [0, 0, 0, 0];
    for (let i = 1; i < rows.length; i++) {
        const cols = rows[i].getElementsByTagName("td");
        switch (cols[cols.length - 2].innerText) {
            case "5":
                massMark[massMark.length - 1]++;
                break;
            case "3":
                massMark[1]++;
                break;
            case "2":
                massMark[0]++;
                break;
        }
    }
}

function addBadgeWithCountMark() {
    const cols = document.querySelectorAll(".row > .col-xxl-3 > h4");
    for (let i = 0; i < massMark.length; i++) {
        if (massMark[i] >= 0) {
            const bage = document.createElement("span");
            bage.classList.add("badge", 'ms-2', 'rounded-pill');
            let existBage;
            switch (i) {
                case 0:
                    bage.classList.add('text-bg-danger');
                    existBage = document.querySelector(".badge.ms-2.rounded-pill.text-bg-danger");
                    if (existBage === null) {
                        if (massMark[0] > 0) {
                            bage.innerText = massMark[0];
                            cols[2].appendChild(bage);
                        }
                    }
                    else {
                        if (massMark[0] == 0)
                            existBage.remove();
                        else
                            existBage.innerHTML = massMark[0];
                    }
                    break;
                case 1:
                    bage.classList.add('text-bg-warning');
                    existBage = document.querySelector(".badge.ms-2.rounded-pill.text-bg-warning");
                    if (existBage === null) {
                        if (massMark[1] > 0) {
                            bage.innerText = massMark[1];
                            cols[1].appendChild(bage);
                        }
                    }
                    else {
                        if (massMark[1] == 0)
                            existBage.remove();
                        else
                            existBage.innerHTML = massMark[1];
                    }
                    break;
                case 3:
                    bage.classList.add('text-bg-success');
                    existBage = document.querySelector(".badge.ms-2.rounded-pill.text-bg-success");
                    if (existBage === null) {
                        if (massMark[3] > 0) {
                            bage.innerText = massMark[3];
                            cols[0].appendChild(bage);
                        }
                    }
                    else {
                        if (massMark[3] == 0)
                            existBage.remove();
                        else
                            existBage.innerHTML = massMark[3];
                    }
                    break;
            }
        }
    }
}

addEventListenerForDelete();
changeColorColumn();
countMarkInTable();
addBadgeWithCountMark();