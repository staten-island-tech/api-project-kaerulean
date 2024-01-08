import '/style.css'
import { DOMSelectors } from './dom';

const URLall = `https://restcountries.com/v3.1/all`;
const URLflags = `https://restcountries.com/v3.1/all?fields=name,flags`;
const URLcapital = `https://restcountries.com/v3.1/all?fields=name,capital`;
const URLpopulation = `https://restcountries.com/v3.1/all?fields=name,population`;
const URLregion = `https://restcountries.com/v3.1/all?fields=name,region`;

//TO DO: get the url for population and add media quieres to css

async function getDataAll(URL){
    try{
        const response = await fetch(URL);
        console.log(response);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data)
        function poo(arr){
            arr.forEach((el)=>DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                <h2 class="card-name">${el.name.common}</h2>
                <img src="${el.flags.png}" alt="" class="card-img">
                <div class="bullets">
                <p class="bullet" id="card-capital">Capital: ${el.capital} </p>
                <p class="bullet" id="card-population">Population: ${el.population}</p>
                <p class="bullet" id="card-region">Region: ${el.region}</p>
                </div>
                </div>`
            ))
        } 
        poo(data)

    } catch (error){
        console.log(error)
    }

}

getDataAll(URLall)

async function getDataflags(URL){
    try{
        const response = await fetch(URL);
        console.log(response);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data)
        function poo(arr){
            arr.forEach((el)=>DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                <h2 class="card-name">${el.name.common}</h2>
                <img src="${el.flags.png}" alt="" class="card-img">`
            ))
        } 

        function hi(){ 
            DOMSelectors.submit.addEventListener("click", function(event){
                let content = DOMSelectors.form.value.toLowerCase()
                console.log(content)
                if(content === "flags"){
                    DOMSelectors.container.innerHTML = ""
                    poo(data)
                }
                // //poo(header) 
                event.preventDefault()
            })
        }

        hi()

    } catch (error){
        console.log(error)
    }

}

getDataflags(URLflags)

async function getDataCapital(URL){
    try{
        const response = await fetch(URL);
        console.log(response);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data)
        
        function poo(arr){
            arr.forEach((el)=>DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                <h2 class="card-name">${el.name.common}</h2>
                <div class="bullets">
                <p class="bullet" id="card-capital">Capital: ${el.capital}</p>
                </div>
                </div>`
            ))
        } 

        function hi(){ 
            DOMSelectors.submit.addEventListener("click", function(event){
                let content = DOMSelectors.form.value.toLowerCase()
                console.log(content)
                if(content === "capital"){
                    DOMSelectors.container.innerHTML = ""
                    poo(data)
                }
                // //poo(header) 
                event.preventDefault()
            })
        }

        hi()
    
    } catch (error){
        console.log(error)
    }
}

getDataCapital(URLcapital)

async function getDataPopulation(URL){
    try{
        const response = await fetch(URL);
        console.log(response);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data)
        function poo(arr){
            arr.forEach((el)=>DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                <h2 class="card-name">${el.name.common}</h2>
                <div class="bullets">
                <p class="bullet" id="card-population">Population: ${el.population}</p>
                </div>
                </div>`
            ))
        } 

        function hi(){ 
            DOMSelectors.submit.addEventListener("click", function(event){
                let content = DOMSelectors.form.value.toLowerCase()
                console.log(content)
                if(content === "population"){
                    DOMSelectors.container.innerHTML = ""
                    poo(data)
                }
                // //poo(header) 
                event.preventDefault()
            })
        }

        hi()
    
    
    } catch (error){
        console.log(error)
    }
}

getDataPopulation(URLpopulation)

async function getDataRegion(URL){
    try{
        const response = await fetch(URL);
        console.log(response);
        if(response.status != 200){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data)

        function poo(arr){
            arr.forEach((el)=>DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                <h2 class="card-name">${el.name.common}</h2>
                <div class="bullets">
                <p class="bullet" id="card-region">Region: ${el.region}</p>
                </div>
                </div>
                `
            ))
        }
    
        function hi(){ 
            DOMSelectors.submit.addEventListener("click", function(event){
                let content = DOMSelectors.form.value
                if(content === "region"){
                    DOMSelectors.container.innerHTML = ""
                    poo(data)
                }
                // //poo(header) 
                event.preventDefault()
            })
        }

        hi()

    } catch (error){
        console.log(error)
    }
}

getDataRegion(URLregion)


