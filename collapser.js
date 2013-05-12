//COLLAPSER FUNCTION
(function($){
    //Author: Xasion
    //Created: 5/12/2013
    //Feel free to use, copy, or modify!

    $.fn.collapser = function(settings){
        var headerText = "Show Details";
        var headerType = "link";

        if(settings)
        {
            if(settings.type)
                headerType = settings.type;
            if(settings.text)
                headerText = settings.text;
        }

        var content = $(this);
        content.wrapInner("<div class='togglerContent'>");
        content.find('.togglerContent').toggle();

        AddHeader(content, headerType, headerText);

        $('.togglerHeader').on("click", function(){
            var toggler = $(this).parent(".collapser");
            toggler.find('.togglerContent').toggle();
        });

        function AddHeader(collapser, headerType, headerText){
            if(headerType === "button"){
                collapser.prepend("<button class='button togglerHeader'>" + headerText + "</button>");
            }
            else{
                collapser.prepend("<a href='#' class='togglerHeader'>" + headerText + "</a>");
            }
        }
    };

})(jQuery);