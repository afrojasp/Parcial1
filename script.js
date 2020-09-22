
const urlDatosParcial1 = 'https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json';

let burgers;
let tacos;
let salads;
let desserts;
let drinks;

fetch(urlDatosParcial1)
    .then(response => {
        return response.json();
    })
    .then(myJson => {

        myJson.forEach((element, index) => {
            if(index === 0){
                burgers = element;
            }
            else if(index === 1){
                tacos = element;
            }
            else if(index === 2){
                salads = element;
            }
            else if(index === 3){
                desserts = element;
            }
            else if (index === 4){
                drinks = element;
            }
        })

        console.log(burgers);
        console.log(tacos);
        console.log(salads)
        console.log(desserts)
        console.log(drinks)

    })

function showBurgers(){

}



    
