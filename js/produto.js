jQuery(".comp").click(function(){
    jQuery(".prod").hide(),
        jQuery(".c").fadeIn();
    })
jQuery(".casa").click(function(){
    jQuery(".prod").hide(),
        jQuery(".ca").fadeIn();
    })
jQuery(".fem").click(function(){
    jQuery(".prod").hide(),
        jQuery(".f").fadeIn();
    })
jQuery(".masc").click(function(){
    jQuery(".prod").hide(),
        jQuery(".m").fadeIn();
    })
jQuery(".pul").click(function(){
    jQuery(".prod").hide(),
        jQuery(".p").fadeIn();
    })
jQuery(".brin").click(function(){
    jQuery(".prod").hide(),
        jQuery(".b").fadeIn();
    })


jQuery(".add-carrinho").click(function(){
    var newRow = $("<tr>");
    var cols = "";
    cols += '<td>';
    cols+=  $(this).data("prod"); 
    cols += '</td>';
    cols += '<td name="preco" >';
    cols+=  $(this).data("val"); 
    cols += '</td>';
    newRow.append(cols);
    $("#products-table").append(newRow);
    return false;   
})


$(".btnTotal").click(function(){  
    s = 0.00,
    $.each($("td[name='preco']"),function() {
        s += parseFloat($(this).html());
    });
    $("#total").append("R$ " + s);
});

$(document).ready(function(){
    $("a[rel=modal]").click( function(ev){
        ev.preventDefault();
        var id = $(this).attr("href");
        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
     
        //colocando o fundo preto
        $('#mascara').css({'width':larguraTela,'height':alturaTela});
        $('#mascara').fadeIn(1000); 
        $('#mascara').fadeTo("slow",0.8);
 
        var left = ($(window).width() /2) - ( $(id).width() / 2 );
        var top = 50;
     
        $(id).css({'top':top,'left':left});
        $(id).show();   
    });
});
 
    $("#mascara").click( function(){
        $(this).hide();
        $(".window").hide();
    });
 

$('.fechar').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
});




function funcao1()
{
    alert("Compra Realizada com sucesso!");
    $("#mascara").hide();
    $(".window").hide();
}



