import "regenerator-runtime";
import 'bootstrap';
import './style.css';
import $ from "jquery";


const kontener = document.querySelector('.kontener');
const jumbo = document.querySelector('.jumbo');

kontener.addEventListener('click', function (e) {

    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
    }
});




const menu = document.getElementById("menu");
menu.innerText = "MENU TEH  BOHAY";
menu.style.fontWeight = "bold";
menu.style.fontSize = "30px"
menu.style.textAlign = "center";
menu.style.paddingTop = "50px"

// const menu = document.getElementById("menu");
setInterval(function () {
    menu.style.color = "red";

    setTimeout(function () {
        menu.style.color = "blue";

    }, 500)
}, 1000);

/*mohohn koreksi juga sintaks untuk memanggil json apakah masih ada yang perlu ditambahkan? */
function UserAction() {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responeText);
            const data = JSON.parse(xhttp.responeText);
            data.forEach(function (element) {
                document.getElementById('menu').innerHTML
                /*mohon di sini ditulis seperti apa sintaks untuk 
membuat tampilan data dari menu minuman cocktail agar tampilan yang muncul menyerupai kolom-kolom/card 
dengan menampilkan berbagai macam minuman */
            })
            xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send({
                "drinks": [{
                    "idDrink": "13825",
                    "strDrink": "Midnight Manx",
                    "strDrinkAlternate": null,
                    "strDrinkES": null,
                    "strDrinkDE": null,
                    "strDrinkFR": null,
                    "strDrinkZH-HANS": null,
                    "strDrinkZH-HANT": null,
                    "strTags": null,
                    "strVideo": null,
                    "strCategory": "Ordinary Drink",
                    "strIBA": null,
                    "strAlcoholic": "Alcoholic",
                    "strGlass": "Old-fashioned glass",
                    "strInstructions": "Fill a mixer with ice and add Baileys, Kahlua, Goldshlager, and cream. Shake for 5 seconds and Strain into a double rocks glass filled with ice. Add chilled coffee Stir and enjoy!",
                    "strInstructionsES": null,
                    "strInstructionsDE": "Füllen Sie einen Mixer mit Eis und fügen Sie Baileys, Kahlua, Goldshlager und Sahne hinzu. 5 Sekunden schütteln und in ein mit Eis gefülltes Doppelglas abseihen. Fügen Sie gekühlten Kaffee hinzu Rühren und genießen Sie!",
                    "strInstructionsFR": null,
                    "strInstructionsZH-HANS": null,
                    "strInstructionsZH-HANT": null,
                    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uqqurp1441208231.jpg",
                    "strIngredient1": "Kahlua",
                    "strIngredient2": "Baileys irish cream",
                    "strIngredient3": "Goldschlager",
                    "strIngredient4": "Heavy cream",
                    "strIngredient5": "Coffee",
                    "strIngredient6": null,
                    "strIngredient7": null,
                    "strIngredient8": null,
                    "strIngredient9": null,
                    "strIngredient10": null,
                    "strIngredient11": null,
                    "strIngredient12": null,
                    "strIngredient13": null,
                    "strIngredient14": null,
                    "strIngredient15": null,
                    "strMeasure1": "1 oz ",
                    "strMeasure2": "1 oz ",
                    "strMeasure3": "dash ",
                    "strMeasure4": "2 oz ",
                    "strMeasure5": "2 oz Hazlenut ",
                    "strMeasure6": null,
                    "strMeasure7": null,
                    "strMeasure8": null,
                    "strMeasure9": null,
                    "strMeasure10": null,
                    "strMeasure11": null,
                    "strMeasure12": null,
                    "strMeasure13": null,
                    "strMeasure14": null,
                    "strMeasure15": null,
                    "strCreativeCommonsConfirmed": "No",
                    "dateModified": "2015-09-02 16:37:11"
                }]
            });
        }
    }
}





class FooterApp extends HTMLElement {
    constructor() {
        super();

        // this.innerHTML = `${<h3>Jl. Raya Desa Sudimampir Blok Letok</h3>}`;
        this.innerHTML = `<h3>Jl. Raya Desa Sudimampir Blok Letok</h3>`;
    }
}

window.customElements.define("footer-app", FooterApp);