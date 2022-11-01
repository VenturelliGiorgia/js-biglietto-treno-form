const km = parseInt(prompt("Quanti km vuoi percorrere?"));
const costoKm = .21;
const costoKmTotal = km * .21;
const fullName = prompt("Come ti chiami?");

const inputEl = document.querySelector("[name='fullname']");
console.log(inputEl);
inputEl.value = fullName;
console.log(inputEl.value);

const inputKmEl = document.querySelector("[name='km']");
console.log(inputEl);
inputKmEl.value = km;
console.log(inputKmEl.value);
h4.innerHTML = `<strong>${fullName}</strong>`
const btnGenera = document.getElementById("btn-genera");
console.log(costoKmTotal);
let value;
const mySelect = document.getElementById("mySelect");
btnGenera.addEventListener("click", function myFunction() {

    const indiceSelect = mySelect.selectedIndex; //variabile che gestisce l'indice della select con le suo option
    const valoreSelect = mySelect.options[indiceSelect]; //le associa le opzioni 
    const valoreOpzione = valoreSelect.value; //da un valore alle opzioni 
    console.log(valoreSelect);

    if (valoreOpzione == 20) {
        const costoTotal = costoKmTotal * .80;
        let num = costoTotal.toFixed(2);
        carrozza.innerHTML = `5`
        codice.innerHTML = `92911`
        tipoBiglietto.innerHTML = `Biglietto Minorenni`
        costoBiglietto.innerHTML = `${num}Є`;
    } else if (valoreOpzione == 40) {
        const costoTotal = costoKmTotal * .60;
        let num = costoTotal.toFixed(2);
        carrozza.innerHTML = `2`
        codice.innerHTML = `96981`
        tipoBiglietto.innerHTML = `Biglietto Over65`

        costoBiglietto.innerHTML = `${num}Є`
    } else {
        let num = costoKmTotal.toFixed(2);
        carrozza.innerHTML = `8`
        codice.innerHTML = `92532`
        tipoBiglietto.innerHTML = `Biglietto Standard`
        costoBiglietto.innerHTML = `${num}Є`
    }

    console.log(mySelect.value);
});