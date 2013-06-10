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
(function(e){e.fn.collapser=function(t){function s(e,t,n){if(t==="button"){e.prepend("<button class='button togglerHeader'>"+n+"</button>")}else{e.prepend("<a href='#' class='togglerHeader'>"+n+"</a>")}}var n="Show Details";var r="link";if(t){if(t.type)r=t.type;if(t.text)n=t.text}var i=e(this);i.wrapInner("<div class='togglerContent'>");i.find(".togglerContent").toggle();s(i,r,n);e(".togglerHeader").on("click",function(){var t=e(this).parent(".collapser");t.find(".togglerContent").toggle()})}})(jQuery)