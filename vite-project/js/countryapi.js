import '/style.css'
import { DOMSelectors } from './dom';


const URL = `https://api.sampleapis.com/countries/countries`;


async function getData(URL){
    try {
        const response = await fetch(URL);
        console.log(response); //VERY IMPORTANT
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        //take reponse from server and convert it to JSON
        const data = await response.json();
        
        console.log(data)
        
       /*  function click(){
            DOMSelectors.submit.addEventListener("click", function(event){
                console.log(DOMSelectors.form.value) 
                event.preventDefault()
                if (DOMSelectors.form.value === "flags"){
                    console.log("yay")
                    data.forEach((el) => DOMSelectors.div.insertAdjacentHTML('beforeend',`<img src="${el.media.flag}" alt="no image avaliable :(" class="card-img"/>`))
                }
            })
        } */
        //click();

        function poo(arr){
            arr.forEach((el)=>DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                <h2 class="card-name">${el.name} (${el.abbreviation})</h2>
                <img src="${el.media.flag}" alt="${el.name}" class="card-img">
                <div class="bullets">
                <p class="bullet" id="card-capital">Capital: ${el.capital} </p>
                <p class="bullet" id="card-population">Population: ${el.population}</p>
                <p class="bullet" id="card-currency">Currency: ${el.currency}</p>
                </div>
                </div>`
            ))
        }

        function hi(){ 
            DOMSelectors.submit.addEventListener("click", function(event){
                DOMSelectors.container.innerHTML = ""
                let content = DOMSelectors.form.value
                let name = data.filter((el) => el.name === content)
                console.log(name)
                //do the if statement but instead of data.name its != name
                /* if (DOMSelectors.form.value != data.name){ //filter through every name instead
                    console.log("d")
                } */
            
                //let capitalize = content.charAt(0).toUpperCase() + str.slice(1);
                //console.log(capitalize)
                let info = data.filter((el)=>el.name.includes(content))
                console.log(content)
                //poo(header)
                poo(info) 
                event.preventDefault()
            })
        }

       
        hi()
        //const pp = data.forEach((el) => document.querySelector("h1").textContent = el.capital)
        //const pp = `https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg`
        //document.querySelector(".div").insertAdjacentHTML('beforeend',`<img src="${pp}" alt="" class="card-img" />`)//get flag picture working first
        
        //yay this works
        //data.forEach((el) => DOMSelectors.div.insertAdjacentHTML('beforeend',`<img src="${el.media.flag}" alt="" class="card-img"/>`))

        //data.forEach((el) => document.querySelector("h1").textContent = el.capital)
        //document.querySelector("h1").textContent = data.capital;
        //document.querySelector("h2").textContent = data.phone;
    } catch (error){
        console.log(error)

    }
    
}

async function getDatapre(URL){
    try {
        const response = await fetch(URL);
        console.log(response); //VERY IMPORTANT
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        //take reponse from server and convert it to JSON
        const data = await response.json();

        function poo(arr){
            arr.forEach((el)=>DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                <h2 class="card-name">${el.name} (${el.abbreviation})</h2>
                <img src="${el.media.flag}" alt="${el.name}" class="card-img">
                <div class="bullets">
                <p class="bullet" id="card-capital">Capital: ${el.capital} </p>
                <p class="bullet" id="card-population">Population: ${el.population}</p>
                <p class="bullet" id="card-currency">Currency: ${el.currency}</p>
                </div>
                </div>`
            ))
        }

        function hi(){ 
            let content = DOMSelectors.form.value
            let name = data.filter((el) => el.name === content)
            console.log(name)
            let info = data.filter((el)=>el.name.includes(content))
            console.log(content)
            //poo(header)
            poo(info) 
        }

        hi()
    } catch (error){
        console.log(error)
        

    }
    
}

getDatapre(URL)
getData(URL);



//console.log(Math.floor(Math.random() * 100)) //rando number thing