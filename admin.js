class Artikal {
    constructor(id, naziv, cena, opis) {
        this.id = id;
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
    }
}

let artikli = [
    new Artikal(1, "Bežične slušalice Pro X", 12490, "Visokokvalitetne bežične slušalice sa aktivnim poništavanjem buke, do 30h trajanja baterije i odličnim basom."),
    new Artikal(2, "Pametni sat Fitness Elite", 8990, "Pametni sat sa merenjem pulsa, SpO2, praćenjem sna, GPS-om i vodootpornošću do 50m."),
    new Artikal(3, "Prenosivi punjač 20000mAh", 3490, "Brzi powerbank sa 20000mAh kapacitetom, podrškom za PD 20W i dva USB porta.")
];

function createArticleRows() {
    const tbody = document.getElementById('tabela');
    tbody.innerHTML = '';  

    for (let i = 0; i < artikli.length; i++) {
        const artikal = artikli[i];
        
        const tr = document.createElement('tr');
        
        const tdBr = document.createElement('td');
        tdBr.textContent = i + 1;
        
        const tdNaziv = document.createElement('td');
        tdNaziv.textContent = artikal.naziv;
        
        const tdCena = document.createElement('td');
        tdCena.textContent = artikal.cena + " RSD";
        
        tr.appendChild(tdBr);
        tr.appendChild(tdNaziv);
        tr.appendChild(tdCena);
        
        tr.addEventListener('click', function() {
            displayDetails(artikal);
        });
        
        tbody.appendChild(tr);
    }
}

function displayDetails(artikal) {
    const detalji = document.querySelector("#detalji");
    detalji.innerHTML = "";  
    
    const p = document.createElement("p");
    p.innerHTML = "Naziv: " + artikal.naziv + "<br>" +
                  "Cena: " + artikal.cena + " RSD<br>" +
                  "Opis: " + artikal.opis;
    
    detalji.appendChild(p);
}

function handleFormSubmission() {
    const submitBtn = document.querySelector('#dodaj-btn');
    
    submitBtn.addEventListener('click', function() {
        const naziv = document.querySelector('#naziv').value;
        const cena = document.querySelector('#cena').value;
        const opis = document.querySelector('#opis').value;
        
        const noviArtikal = new Artikal(artikli.length + 1, naziv, cena, opis);
        artikli.push(noviArtikal);
        
        createArticleRows();  
        
        document.querySelector('#naziv').value = '';
        document.querySelector('#cena').value = '';
        document.querySelector('#opis').value = '';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createArticleRows();
    handleFormSubmission();
});