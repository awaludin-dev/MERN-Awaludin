class Table {
    constructor(init) {
        this.init = init;
    }

    createHeader(data) {
        let recordHeader = ``;
        data.forEach(subData => {
            recordHeader += `<th scope="col" class="table-info">${subData}</th>`;
        });

        return `<thead><tr>${recordHeader}</tr></thead>`;
    }

    createBody(data) {
        let recordBody = ``;
        let index = 1;
        data.forEach(subData => {
            recordBody += `
            <tr>
                <th scope="row">${index++}</th>
                <td>${subData[0]}</td>
                <td>${subData[1]}</td>
            </tr>`;
        });

        return `<tbody style='cursor:pointer'>${recordBody}</tbody>`;
    }

    input(element) {
        let table = 
            "<table class='table table-hover table-bordered'>" +
            this.createHeader(this.init.head) +
            this.createBody(this.init.body) +
            "</table>";
        element.innerHTML = table;
    }
}

export default Table;