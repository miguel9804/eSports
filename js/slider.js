var slider=$('#slider');
var numA =100;
var numI =0;
var numV=0;
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');


slider.css('margin-left', '-'+numI+'%');

function moverD()
{
    if (numV<500)
    numV=numV+numA;
    slider.animate({marginLeft:'-'+numV+ '%'}, 700)
}
siguiente.on('click', function(){moverD()})

function moverL()
{
    if (numV>0)
    numV=numV-numA;
    slider.animate({marginLeft:'-'+numV+ '%'}, 700)
    
}
anterior.on('click', function(){moverL()})


