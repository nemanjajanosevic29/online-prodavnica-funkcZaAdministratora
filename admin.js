class Artikal {
    constructor(id, naziv, cena, opis) {
        this.id = id;
        this.naziv = naziv.trim();
        this.cena = Number(cena);
        this.opis = opis.trim();
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
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', popuniTabelu);