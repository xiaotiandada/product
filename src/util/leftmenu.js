$(function(){
    $('.label dl').each(function(index){
        $(this).mouseover(function(){
            $(this).addClass('dlhover')
            $('.panel .item:eq('+index+')').show()
        })
        $(this).mouseout(function(){
            $(this).removeClass('dlhover')            
            $('.panel .item:eq('+index+')').hide()
       })
    })

    $('.panel .item').each(function(index){
        $(this).mouseover(function(){
            $('.label dl:eq('+index+')').addClass('dlhover')
            $(this).show()
        })
        $(this).mouseout(function(){
            $('.label dl:eq('+index+')').removeClass('dlhover')
            $(this).hide()
        })
    })
})