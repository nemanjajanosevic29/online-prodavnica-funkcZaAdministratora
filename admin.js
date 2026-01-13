class Artikal {
    constructor(id, naziv, cena, opis) {
        this.id = id;
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
    }
}

const artikli = [
    new Artikal(1, "Bežične slušalice Pro X", 12490, "Visokokvalitetne bežične slušalice sa aktivnim poništavanjem buke, do 30h trajanja baterije i odličnim basom."),
    new Artikal(2, "Pametni sat Fitness Elite", 8990, "Pametni sat sa merenjem pulsa, SpO2, praćenjem sna, GPS-om i vodootpornošću do 50m."),
    new Artikal(3, "Prenosivi punjač 20000mAh", 3490, "Brzi powerbank sa 20000mAh kapacitetom, podrškom za PD 20W i dva USB porta.")
];

function popuniTabelu() {
    const tbody = document.getElementById('tabela');
    
    tbody.innerHTML = '';

    artikli.forEach(artikal => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${artikal.id}</td>
            <td>${artikal.naziv}</td>
            <td>${artikal.cena} RSD</td>
        `;
        
        tr.dataset.id = artikal.id;

        tr.addEventListener('click', function() {
            displayDetails(artikal);
        });
        
        tbody.appendChild(tr);
    });
}

function displayDetails(artikal) {
    const p = document.createElement("p");
    
    p.innerHTML = `
        Naziv: ${artikal.naziv}<br>
        Cena: ${artikal.cena} RSD<br>
        Opis: ${artikal.opis}
    `;

    const detalji = document.querySelector("#detalji");

    detalji.innerHTML = "";

    detalji.appendChild(p);
}

document.addEventListener('DOMContentLoaded', popuniTabelu);