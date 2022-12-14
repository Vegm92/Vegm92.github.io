// Immediately-Invoked Function Expression, or IIFE
(function() { 
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector('.btn-equal');
    let delfunct = document.querySelector(".btn-del");
    let squareRoot = document.querySelector(".btn-squareRoot");
    let square = document.querySelector(".btn-square");
    let operationDone = false; 
    let operationsManager;

    buttons.forEach(function(button){
        button.addEventListener("click", function(event){
            let value = event.target.dataset.num;
            if(operationDone){
                screen.value = "";
                operationDone = false;
            }
            screen.value += value;
        })
    });

    equal.addEventListener("click", function() {
        if(screen.value === ''){
            screen.value = "";
        } else{
            let answer = eval(screen.value);
            screen.value = answer;
            operationDone = true; 
        }
    })

    clear.addEventListener('click', function(){
        screen.value = "";


    })

    delfunct.addEventListener('click', function() {
        let valueToDelete = screen.value.slice(0, -1)
        screen.value = valueToDelete;
    })

    squareRoot.addEventListener('click', function() {
        let value = Math.sqrt(screen.value)
        screen.value = value;
        operationDone = true; 

    })

    square.addEventListener('click', function() {
        let value = screen.value * screen.value;
        screen.value = value;
        operationDone = true; 

    })

    document.addEventListener("keydown", function (event) {
        if(operationDone){
            screen.value = "";
            operationDone = false;
        }
        switch (event.key) {
            
            case "1":
                screen.value += 1;
                break;
            case "2":
                screen.value += 2;
                break;
            case "3":
                screen.value += 3;
                break;
            case "4":
                screen.value += 4;
                break;
            case "5":
                screen.value += 5;
                break;
            case "6":
                screen.value += 6;
                break;
            case "7":
                screen.value += 7;
                break;
            case "8":
                screen.value += 8;
                break;
            case "9":
                screen.value += 9;
                break;
            case "0":
                screen.value += 0;
                break;
            case "+":
                if(!screen.value.includes("+")){
                    screen.value += "+";
                }
                break;
            case "/":
                if(!screen.value.includes("/")){
                screen.value += "/"
                }
                break;
            case "*":
                if(!screen.value.includes("*")){
                screen.value += "*"
                }
                break;
            case "-":
                if(!screen.value.includes("-")){
                screen.value += "-"
                }
                break;
            case ".":
                if(!screen.value.includes(".")){
                screen.value += "."
                }
                break;
            case "Enter":
                    if(screen.value === ''){
                        screen.value = "";
                    } else{
                        let answer = eval(screen.value);
                        screen.value = answer;
                        operationDone = true; 
                    }
                
                break;
            case "Backspace":
                screen.value = screen.value.slice(0, -1)
                break;
            case "Delete":
                screen.value = "";
                break;
            default:
                break;
        }
    });

    operationsManager = (operation)=> {
        switch (operation) {
            case operation > 1 :

                break;
        
            default:
                break;
        }
    }
})();
