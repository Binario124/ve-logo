class Form {
    constructor(){
    this.input= createInput("Digite seu nome")
    this.button = createButton("Clique para Jogar")
    this.greeting = createElement('h3')
    }
    hide (){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    
    }
    //>0\\
    display(){
        var title = createElement('h3')
        title.html("Corrida de Carro Multi-Player");
        title.position(90,10);
     
        
        this.input.position(100,160);
     
     
       
        this.button.position(150,200);
     
       
       
     
     
     
     
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
     
            var name = this.input.value();
     
            playerCount+=1
     
           
            player.update(name)
            player.updateCount(playerCount);
         
            this.greeting.html("Olá "+ name + " seu bananão")
            this.greeting.position(110,160)
        });
    }
     
     
        }
    