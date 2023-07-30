

// ====DEFININDO AJUSTE DE TAMANHO DO PALCO DO JOGO=====
var altura = 0 
var largura = 0

function AjustaTamanhoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth
    // console.log(altura, largura)
}

AjustaTamanhoJogo()
// ======================================================


// ============DEFININDO POSIÇÕES RANDOMICAS==============

 var posicaoX = Math.floor(Math.random() * largura) - 90
 var posicaoY = Math.floor(Math.random() * altura) - 90
 posicaoX = posicaoX < 0 ? 0 : posicaoX
 posicaoY = posicaoY < 0 ? 0 : posicaoY

//  console.log(posicaoX, posicaoY)


// ======================================================

// ===============CRIANDO ELEMENTOS HTML=================
function posicaorandomica(){
    var mosquito = document.createElement('img')
    mosquito.src = 'assets/img/mosca.png'
    mosquito.className = TamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)

    // console.log(TamanhoAleatorio())
    // console.log(ladoAleatorio())
}

// ======================================================


// ===============DEFININDO TAMANHO DAS MOSCAS=================

function TamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    //console.log(classe)
    switch(classe){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

// ============================================================

// ===============DEFININDO LADOS A E B DA MOSCA=================

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }


}


// ============================================================
