class  Animal {
    construtor ( nome ){
        this.nome = nome
    }
    emitirSom(){
        return "Som aleatório"
    }
}
class cachorro extends Animal{
    constructor(nome){
        super(nome);
    }
    emitirSom(){
        return "Wooff Wooof Wooof";
    }
    abanarRabo(){
        return `${this.nome} abanou o rabinho`
    }
}
    
const Rex = new cachorro("Rex")
console.log(Rex.abanarRabo());
console.log(Rex.emitirSom());