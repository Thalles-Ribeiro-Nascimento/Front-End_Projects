function tocaSom(idTagAudio){
   const elemento = document.querySelector(idTagAudio);

   if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        alert('Elemento não encontrado ou seletor inválido!');
    }
}

const listaDeteclas = document.querySelectorAll('.tecla'); 



//Para
for(let contador = 0;contador < listaDeteclas.length; contador++){

    const tecla = listaDeteclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(e){
        if (e.code === 'Enter' || e.code === 'Space'){ 
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
