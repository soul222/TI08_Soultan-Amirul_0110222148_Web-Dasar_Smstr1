let kertas = document.querySelector("#Kertas");
let gunting = document.querySelector("#Gunting");
let batu = document.querySelector("#Batu");
let hasil = document.getElementById("hasil");

// funtion komputer
    const selectChoice = () =>{
            const option = ["kertas", "gunting", "batu"]
            let result = option[Math.floor(Math.random() * 3)]
            return result;
    }

    batu.addEventListener("click", ()=>{
        let choice = selectChoice()
        hasil.innerHTML = choice;
        setTimeout(() => {
            switch(choice){
                case "batu":
                        alert("seri")    
                    break
                case "gunting":
                        alert("Kamu menang")
                break
                default:
                    alert("computer menang")
                break
            }
        }, 800);
            
    })
    kertas.addEventListener("click", ()=>{
        let choice = selectChoice()
        hasil.innerHTML = choice;
        setTimeout(() => {
            switch(choice){
                case "batu":
                    alert("Kamu menang")
                break
                case "gunting":
                    alert("computer menang")
                break
                default:
                    alert("seri")    
                break
            }
        }, 800);
            
    })
    gunting.addEventListener("click", ()=>{
        let choice = selectChoice()
        hasil.innerHTML = choice;
        setTimeout(() => {
            switch(choice){
                case "batu":
                        alert("computer menang")
                break
                case "gunting":
                        alert("seri")    
                break
                default:
                        alert("Kamu menang")
                break
            }
        }, 800);
            
    })