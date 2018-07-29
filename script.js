$(function () {
    var input=$('#input-box');
    var button=$('#sub');
    var del=$('#del');
    var list=$('#list');
    var pre=$('#pre')
    button.click(
        function(){
            var value=input.val();
            input.val("");
            list.append(
                $('<li>').append(
                    $('<span>').text(value).click(function(ev){
                        $(ev.currentTarget).parent().toggleClass('checked');
                    }))
                    .append(
                    $('<button>').text('X').click(function(ev){
                        $(ev.currentTarget).parent().remove();
                    }))
                    .append(
                        $('<button>')
                        .text('V')
                        .click(
                            (ev) => $(ev.currentTarget).parent().insertAfter(
                                $(ev.currentTarget).parent().next()
                            )
                        )
                    )
                    .append(
                        $('<button>')
                        .text('|')
                        .click(
                            (ev) => $(ev.currentTarget).parent().insertBefore(
                                $(ev.currentTarget).parent().prev()
                            )
                        )
                    )                    
                )                
            
        }
    )
    pre.click(
        function(){
            var value=input.val();
            input.val("");
            list.append(
                $('<li>').append(
                    $('<span>').text(value).click(function(ev){
                        $(ev.currentTarget).parent().toggleClass('checked');
                    }))
                    .append(
                    $('<button>').text('X').click(function(ev){
                        $(ev.currentTarget).parent().remove();
                    }))
                    .append(
                        $('<button>')
                        .text('V')
                        .click(
                            (ev) => $(ev.currentTarget).parent().insertAfter(
                                $(ev.currentTarget).parent().next()
                            )
                        )
                    )
                    .append(
                        $('<button>')
                        .text('|')
                        .click(
                            (ev) => $(ev.currentTarget).parent().insertBefore(
                                $(ev.currentTarget).parent().prev()
                            )
                        )
                    )                    
                )                
            
        }
    )
    del.click(
        function(){
         let li=$('li.checked');
         (li).remove();
        }
    )
})