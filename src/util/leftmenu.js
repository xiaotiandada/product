$(function(){
    $('.label dl').each(function(index){
        $(this).mouseover(function(){
            $(this).addClass('dlhover')
            $('.panel').show()
            $('.panel .item:eq('+index+')').show()
        })
        $(this).mouseout(function(){
            $(this).removeClass('dlhover')            
            $('.panel').hide()            
            $('.panel .item:eq('+index+')').hide()
       })
    })

    $('.panel .item').each(function(index){
        $(this).mouseover(function(){
            $('.label dl:eq('+index+')').addClass('dlhover')
            $('.panel').show()
            $(this).show()
        })
        $(this).mouseout(function(){
            $('.label dl:eq('+index+')').removeClass('dlhover')
            $('.panel').hide()
            $(this).hide()
        })
    })
})