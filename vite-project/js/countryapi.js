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
        function countryMenu(){
            DOMSelectors.countryButton.addEventListener("click", function(){
                DOMSelectors.mainMenu.innerHTML = ""
                DOMSelectors.countryMenu.insertAdjacentHTML('beforeend', 
                `<button type="button" class="countryMenu-button" id="countryMenu-capital">capital</button>
                <button type="button" class="countryMenu-button" id="countryMenu-flag">flag</button>`)
            })
        }
        
        function countryCapital(){
            document.querySelector("#countryMenu-capital").addEventListener("click", function(){
                DOMSelectors.countryMenu.innerHTML = ""
                //DOMSelectors.container.insertAdjacentHTML('beforeend', `<p>hi</p>`)
                //data.forEach((el) => DOMSelectors.container.insertAdjacentHTML('beforeend',`<img src="${el.media.flag}" alt="" class="card-img"/>`))
                const arrCapital = []
                data.forEach((el) => arrCapital.push(el.capital))
                console.log(arrCapital)
                //document.querySelector('#but').textContent = "hi"
        
                DOMSelectors.container.insertAdjacentHTML('beforeend', `
                    <h2>QUESTION</h2>
                    <img src="" alt="" class="box-flag"> 
                    <button class='box-button' id='box-button-1'>a</button>
                    <button class='box-button' id='box-button-2'>b</button>
                    <button class='box-button' id='box-button-3'>c</button>
                    <button class='box-button' id='box-button-4'>d</button>`
                )

                document.querySelector('#box-button-1').textContent = arrCapital[Number(Math.floor(Math.random() * 250))];
                document.querySelector('#box-button-2').textContent = arrCapital[Number(Math.floor(Math.random() * 250))];
                document.querySelector('#box-button-3').textContent = arrCapital[Number(Math.floor(Math.random() * 250))];
                document.querySelector('#box-button-4').textContent = arrCapital[Number(Math.floor(Math.random() * 250))];

                //think, the options must be equal to one of the flag names and it must be random
                //you also need to do this for the question too so don't try your way out of it..
                

                //DOMSelectors.button1.textContent = arrCapital[Number(Math.floor(Math.random() * 250))]; these dont work because the dom selector is defined before they actually exist
                //DOMSelectors.button2.textContent = arrCapital[Number(Math.floor(Math.random() * 250))];
                //DOMSelectors.button3.textContent = arrCapital[Number(Math.floor(Math.random() * 250))];
                //DOMSelectors.button4.textContent = arrCapital[Number(Math.floor(Math.random() * 250))];
    
                //console.log(arrCapital[Number(Math.floor(Math.random() * 250))])
                //console.log(arrCapital[Number(Math.floor(Math.random() * 250))]) console log my bestie
                //console.log(arrCapital[Number(Math.floor(Math.random() * 250))])
                //console.log(arrCapital[Number(Math.floor(Math.random() * 250))])
                
            })
        }  
        countryMenu()
        
        countryCapital() 

        //const pp = data.forEach((el) => document.querySelector("h1").textContent = el.capital)
        //const pp = `https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg`
        //document.querySelector(".div").insertAdjacentHTML('beforeend',`<img src="${pp}" alt="" class="card-img" />`)//get flag picture working first
        
        //yay this works
        //data.forEach((el) => document.querySelector(".div").insertAdjacentHTML('beforeend',`<img src="${el.media.flag}" alt="" class="card-img"/>`))

        //data.forEach((el) => document.querySelector("h1").textContent = el.capital)
        //document.querySelector("h1").textContent = data.capital;
        //document.querySelector("h2").textContent = data.phone;
    } catch (error){
        console.log(error)
    }
    
}

getData(URL);



//console.log(Math.floor(Math.random() * 100)) //rando number thing