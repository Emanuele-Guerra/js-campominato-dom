let mode = document.getElementById("label");
let start = document.getElementById("start")

let grid = document.getElementById("grid")
let cella = "";
let numCella = "10";


 
start.addEventListener("click", function(){
    grid.classList.add("bg-black")
    let modevalore = mode.value;
    grid.innerHTML= "";
    console.log(modevalore)

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min +1) ) + min;
    } 
    let bombsNum = getRndInteger(1,16)
    console.log(bombsNum)
    if (modevalore == "easy"){
        numCella = 100
    }   else if (modevalore == "medium"){
        numCella = 81
    }   else if (modevalore == "hard"){
        numCella = 49
    }
    
   
         
        for (let i = 1; i <= numCella; i++) {
            let cella =  document.createElement("div")

            cella.addEventListener("click", function(){
                this.classList.toggle("clicked")
                
            
            })
            
            if (modevalore == "easy"){
                
                cella.classList.add("easy-cell")
                grid.appendChild(cella)
                cella.innerHTML = ([])   
            } else if (modevalore == "medium"){
                
                cella.classList.add("mid-cell")
                grid.appendChild(cella)
                cella.innerHTML = ([])
            } else if (modevalore == "hard"){
                
                cella.classList.add("hard-cell")
                grid.appendChild(cella)
                cella.innerHTML = ([])
            }
        }
    })


    