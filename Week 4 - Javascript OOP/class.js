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
        let open = `<tbody>`;
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
            "<table class='table table-hover table-bordered' style='cursor:pointer'>" +
            this.head(this.init.head) +
            this.body(this.init.body) +
            "</table>";
        element.innerHTML = table;
    }
}

let i = 1;

const table = new Table({
    head: ['No', 'Name', 'Email'],
    body: [
        [i++, 'Awaludin Nasir Ubadah', 'ubedsf@gmail.com'],
        [i++, 'Angelina Maratus Sholihah', 'angelms@gmail.com']
    ]
});

const app = document.getElementById("app");
table.input(app);