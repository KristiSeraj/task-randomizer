function randomTask() {
let bruh;
let klasa = document.getElementsByClassName('listElement');
console.log(klasa)
for(var i=0;i < klasa.length; i++){
        bruh = klasa[i].textContent.slice(0, -1);
        console.log(bruh);
    }
}
