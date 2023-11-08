let mode = document.getElementById("label");
let start = document.getElementById("start")

let grid = document.getElementById("grid")
let cella = "";
let numCella = "10";
 
let bombsNums = []





 
start.addEventListener("click", function(){
    grid.classList.add("bg-black")
    let modevalore = mode.value;
    grid.innerHTML= "";
    console.log(modevalore)

   for (let i = 1; i <= 16; i++) {
    let bombsNum = Math.floor(Math.random() * 100);
    bombsNum.push(bombsNums)
    
    
   } console.log(bombsNum)
     
    if (modevalore == "easy"){
        numCella = 84 + bombsNums
    }   else if (modevalore == "medium"){
        numCella = 65 + bombsNums
    }   else if (modevalore == "hard"){
        numCella = 32 + bombsNums
    }
    
   
         
        for (let i = 1; i <= numCella; i++) {
            let cella =  document.createElement("div")

            cella.addEventListener("click", function(){
                this.classList.toggle("clicked")
                
            
            })
            
            if (modevalore == "easy"){
                
                cella.classList.add("easy-cell")
                grid.appendChild(cella)
                bombsNums.classList.add("easy-bomb")
                cella.innerHTML = ([])   
            } else if (modevalore == "medium"){
                
                cella.classList.add("mid-cell")
                grid.appendChild(cella)
                bombsNums.classList.add("mid-bomb")
                cella.innerHTML = ([])
            } else if (modevalore == "hard"){
                
                cella.classList.add("hard-cell")
                grid.appendChild(cella)
                bombsNums.classList.add("hard-bomb")
                cella.innerHTML = ([])
            }
        }
    })


    