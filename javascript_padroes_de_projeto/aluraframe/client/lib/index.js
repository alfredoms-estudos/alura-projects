class Negotiation {
    constructor() {
        this.pageFields = [];
    }

    init() {
        this.pageFields.push(document.querySelector('#data'));
        this.pageFields.push(document.querySelector('#quantidade'));
        this.pageFields.push(document.querySelector('#valor'));
        
        console.log('Fields loaded: ');
        console.log(this.pageFields);

        document.querySelector('.form').addEventListener('submit', () => this.onSubmit());
    }

    onSubmit() {
        // prevent form send
        event.preventDefault();

        const tableRow = document.createElement('tr');
        this.pageFields.forEach(field => {
            const tableCell = document.createElement('td');
            tableCell.textContent = field.value;
            tableRow.appendChild(tableCell);
        });

        // add volumn
        const tableCell = document.createElement('td');
        tableCell.textContent = this.pageFields[1].value * this.pageFields[2].value;
        tableRow.appendChild(tableCell);

        // add values to table
        document.querySelector('table tbody').appendChild(tableRow);
        this.clearFields();
    }

    clearFields() {
        document.querySelector('#data').value = '';
        document.querySelector('#quantidade').value = 1;
        document.querySelector('#valor').value = 0;
    }
};

const negotiation = new Negotiation();
document.addEventListener('DOMContentLoaded', () => negotiation.init(), false);