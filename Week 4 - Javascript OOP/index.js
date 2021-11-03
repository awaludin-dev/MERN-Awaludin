import Table from './module.js';

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