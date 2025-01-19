var textInput = document.getElementById("select")
var num = document.getElementById("num")
var numDois = document.getElementById("numdois")

function operacao(){
    let valorText = textInput.value 
    let valorNUm = num.value
    let ValorNumDois = numDois.value
   
    switch(valorText){
        case "Adição":
          let result = Number(valorNUm) + Number(ValorNumDois)
          alert(result)
          break
        case "Subtração":
           let resultDois =  Number(valorNUm) - Number(ValorNumDois)
           alert(resultDois)
            break
        case "Divisão":
           let resultTres = Number(valorNUm) / Number(ValorNumDois)
           alert(resultTres)
            break
        case "Multiplicação":
            resultQuatro = Number(valorNUm) * Number(ValorNumDois)
            alert(resultQuatro)
            break
            default:
            "Digite um número válido"
    }

}



