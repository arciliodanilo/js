let contador = 0

while(true){
    let saida = prompt("Se você quiser sair digite `sair`")
    if(saida.toLowerCase()=== "sair"){
        alert("Volte depois!")
        break;
    }
    let nome = prompt("Digite um nome.");
    

    for ( i = contador; i <= contador; i++){
        console.log("Indice: "+i+ ", Nome: "+nome)
    }
    contador++
    for(vafiavel of [nome]){
        console.log("Bem vindo "+nome)
    }
    
}