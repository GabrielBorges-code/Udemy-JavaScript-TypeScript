function Calculadora() {
    
    this.display = document.querySelector(".display")
    // btnClear: document.querySelector(".btn-clear");

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
        
    }

    this.pressionaEnter = () => {
        document.addEventListener("keyup", (e) => {
            if(e.keyCode === 13 ) {
                this.realizaConta();
            }
        });
    }

    this.realizaConta = () => {
        let conta = this.display.value;
        
        try {
            conta = eval(conta);

            if(!conta) {
                alert("Conta  inválida"); 
                return;

            }

            this.display.value = String(conta);

        } catch (error) {
            alert("Conta  inválida"); 
            return;
        }
    }

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);  
    
    this.clearDisplay = () => this.display.value = "";
        
    this.cliqueBotoes = () => {
        document.addEventListener("click", (e) => {
            const el = e.target;
            if(el.classList.contains("btn-num")) {
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains("btn-clear")) {
                this.clearDisplay();
            }

            if(el.classList.contains("btn-del")) {
                this.apagaUm();
            }

            if(el.classList.contains("btn-eq")) {
                this.realizaConta();
            }
        })
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();

    } 
        
}

const calculadora = new Calculadora();
calculadora.inicia();
