class Table {
    constructor(init) {
        this.init = init;
    }

    createHeader(data) {
        let dataHead = ``;
        data.forEach(subData => {
            dataHead += `<th scope="col" class="table-info">${subData}</th>`;
        });

        return "<thead><tr>" + dataHead + "</tr></thead>";
    }

    createBody(data) {
        let dataBody = ``;
        let index = 1;
        data.forEach(subData => {
            dataBody += `
            <tr>
                <th scope="row">${index++}</th>
                <td>${subData[0]}</td>
                <td>${subData[1]}</td>
            </tr>`;
        });

        return "<tbody style='cursor:pointer'>" + dataBody + "</tbody>";
    }

    render(element) {
        let table = 
            "<table class='table table-hover table-bordered'>" +
            this.createHeader(this.init.head) +
            this.createBody(this.init.body) +
            "</table>";
        element.innerHTML = table;
    }
}

export default Table;