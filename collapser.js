//Author: Philip Ermish
//Created: 5/12/2013
//License: GNU General Public License
// 	This program is free software: you can redistribute it and/or modify
// 	it under the terms of the GNU General Public License as published by
// 	the Free Software Foundation, either version 3 of the License, or
//	 (at your option) any later version.

// 	This program is distributed in the hope that it will be useful,
// 	but WITHOUT ANY WARRANTY; without even the implied warranty of
// 	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//	 GNU General Public License for more details.

// 	You should have received a copy of the GNU General Public License
// 	along with this program.  If not, see <http://www.gnu.org/licenses/>.

(function($){
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