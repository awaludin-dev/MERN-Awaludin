class Table {
    constructor(init) {
        this.init = init;
    }

    head(data) {
        let open = `<thead><tr>`;
        let close = `</thead></tr>`;

        data.forEach(subData => {
            open += `<th scope="col" class="table-info">${subData}</th>`;
        });

        return open + close;
    }

    body(data) {
        let open = `<tbody style='cursor:pointer'>`;
        let close = `</tbody>`;

        data.forEach(subData => {
            open += `
            <tr>
                <th scope="row">${subData[0]}</th>
                <td>${subData[1]}</td>
                <td>${subData[2]}</td>
            </tr>`;
        });

        return open + close;
    }

    input(element) {
        let table = 
            "<table class='table table-hover table-bordered'>" +
            this.head(this.init.head) +
            this.body(this.init.body) +
            "</table>";
        element.innerHTML = table;
    }
}

export default Table;