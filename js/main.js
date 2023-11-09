let mode = document.getElementById("label");
let start = document.getElementById("start")

let grid = document.getElementById("grid")
let cella = "";



let numCella = "";





 
    start.addEventListener("click", function(){
        
        let bombsCella = [];
        let bombsNums = [];

        let mainElement = document.querySelectorAll('main');
        let headerElement = document.querySelectorAll('header');
        let footerElement = document.querySelectorAll('footer');
        let skull = document.querySelector('#skull');
        
        let alert = document.querySelector('section')
        
        grid.classList.add("bg-black")
        let modevalore = mode.value;
        grid.innerHTML= "";
        bombsNums.innerHTML="";
        console.log(modevalore)

        console.log(bombsNums)
     
        if (modevalore == "easy"){
            numCella = 100
            for (let i = 1; i <= 16; i++) {
                numeriCasuali = Math.floor(Math.random() * 100)+1;
                bombsNums.push(numeriCasuali)
            }    
        }   else if (modevalore == "medium"){
            numCella = 81
            for (let i = 1; i <= 16; i++) {
                numeriCasuali = Math.floor(Math.random() * 81)+1;
                bombsNums.push(numeriCasuali)
            }
            
        }   else if (modevalore == "hard"){
            numCella = 49
            for (let i = 1; i <= 16; i++) {
                numeriCasuali = Math.floor(Math.random() * 49)+1;
                bombsNums.push(numeriCasuali)
            }
        }
        console.log("cella = " + cella)
        console.log("cellaNUM = " + numCella)
        console.log("bombsNum = " + bombsNums)
        let numberIsBomb = false;
        
        for (let i = 1; i <= numCella; i++) {
            bombsCella.push(i)
             
        }

        
        for (let i = 1; i <= bombsCella.length; i++) {
            let cella =  document.createElement("div")

            console.log("numberIsBomb = " + numberIsBomb)
            console.log(bombsCella)
            
            
            
            cella.addEventListener("click", function(){
            for (let j = 0; j <= bombsNums.length; j++) {
                console.log("bombsCella: " + bombsCella[i-1])
                console.log("bombsNums: " + bombsNums[j])
                if(bombsCella[i-1] == bombsNums[j]) {
                    numberIsBomb = true;
                    console.log("bombsNums dentro if = " + bombsNums)
                    break;
                }
                else {
                    numberIsBomb = false;
                }
                
            }

            if (numberIsBomb == true) {
            
                
                cella.classList.add("bombed")
                grid.style.display="none"
                alert.classList.add("lose")
                
                
                alert.innerHTML =("You're Dead")
                let doomguy = alert.appendChild("div")
                
                
                
            
            
            } else {
                cella.classList.add("notBombed")
                console.log("you win")
            }
                
            
            })
            
            if (modevalore == "easy"){
                
                cella.classList.add("easy-cell")
                grid.appendChild(cella)
                
                cella.innerHTML = ([])   
            } else if (modevalore == "medium"){
                
                cella.classList.add("mid-cell")
                grid.appendChild(cella)
                
                cella.innerHTML = ([])
            }   else if (modevalore == "hard"){
                
                cella.classList.add("hard-cell")
                grid.appendChild(cella)
                
                cella.innerHTML = ([])
                }
        }
})


    