let mode = document.getElementById("label");
let start = document.getElementById("start")

let grid = document.getElementById("grid")
let cella = "";
let numCella = "10";
 
let bombsNums = []






 
    start.addEventListener("click", function(){

        let mainElement = document.querySelectorAll('main');
        let headerElement = document.querySelectorAll('header');
        let footerElement = document.querySelectorAll('footer');
        let skull = document.querySelector('#skull');
        let dead = document.getElementById('dead');
        let alert = document.querySelector('section')
        
        grid.classList.add("bg-black")
        let modevalore = mode.value;
        grid.innerHTML= "";
        bombsNums.innerHTML="";
        console.log(modevalore)

    
        for (let i = 1; i <= 16; i++) {
        numeriCasuali = Math.floor(Math.random() * 100);
        bombsNums.push(numeriCasuali)
    
    
        } console.log(bombsNums)
     
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
                

                    if (cella[i] == bombsNums[i]) {
                        
                        cella.classList.add("bombed")
                        grid.style.display="none"
                        alert.classList.add("lose")
                        
                        
                        alert.innerHTML =("You're Dead")
                        dead.style.display = 'block';
                        
                    
                   
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


    