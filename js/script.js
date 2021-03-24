// ========== Scripts do MENU! ========== //
// Menu Mobile //
$(document).ready(function() {
 var botao = $('.menuMobile');
 var dropDown = $('.ul-principal');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

// Menu Principal //
$(document).ready(function() {
 var botao = $('.botao1');
 var dropDown = $('.ul-computadores');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
 var botao = $('.botao2');
 var dropDown = $('.ul-consoles');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
 var botao = $('.botao3');
 var dropDown = $('.ul-tendencias');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
 var botao = $('.botao4');
 var dropDown = $('.ul-seguranca');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});


// ========== Scripts do Produto! ========== //
function play(){
  var som = document.getElementById('somBlock');
  som.play();      
}
function balanca(id){
  var quad = document.getElementById(id); 
  quad.classList.add("shake");
}
function stop(id){
  var quad = document.getElementById(id); 
  quad.classList.remove("shake");
}

//  PRODUTO 1
$(document).ready(function() {
 var botao = $('.botaoRetro1');
 var dropDown = $('.blocoRetro1');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
 var botao = $('.botaoRetro2');
 var dropDown = $('.blocoRetro2');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
 var botao = $('.botaoRetro3');
 var dropDown = $('.blocoRetro3');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
 var botao = $('.botaoRetro4');
 var dropDown = $('.blocoRetro4');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
 var botao = $('.botaoRetro5');
 var dropDown = $('.blocoRetro5');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

//produto 2
$(document).ready(function() {
 var botao = $('.botaoAtual1');
 var dropDown = $('.blocoAtual1');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
 var botao = $('.botaoAtual2');
 var dropDown = $('.blocoAtual2');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
 var botao = $('.botaoAtual3');
 var dropDown = $('.blocoAtual3');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
 var botao = $('.botaoAtual4');
 var dropDown = $('.blocoAtual4');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
 var botao = $('.botaoAtual5');
 var dropDown = $('.blocoAtual5');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});
