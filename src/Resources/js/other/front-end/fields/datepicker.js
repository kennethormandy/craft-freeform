"use strict";!function(){var e={js:"//cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.1/flatpickr.min.js",css:"//cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.1/flatpickr.min.css",locale:"//cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.1/l10n/{locale}.js"},t="{formAnchor}",a=document.querySelector('form[data-id="'.concat(t,'"]'));if(!a)return void console.error('Datepicker could not find form by ID "'.concat(t,'"'));if(!a.freeform)return void console.error("Form is not a Freeform form");var r=function(){for(var e=a.querySelectorAll("*[data-datepicker-enabled]"),t=0;t<e.length;t++){var r=e[t],c={disableMobile:!0,allowInput:!0,dateFormat:r.getAttribute("data-datepicker-format"),enableTime:null!==r.getAttribute("data-datepicker-enabletime"),noCalendar:null===r.getAttribute("data-datepicker-enabledate"),time_24hr:null!==r.getAttribute("data-datepicker-clock_24h"),minDate:r.getAttribute("data-datepicker-min-date"),maxDate:r.getAttribute("data-datepicker-max-date"),minuteIncrement:1,hourIncrement:1,locale:r.getAttribute("data-datepicker-locale"),"static":null!==r.getAttribute("data-datepicker-static")},i=a.freeform._createNewEvent("flatpickr-before-init");i.detail=c,a.dispatchEvent(i);var l=flatpickr(r,i.detail),d=a.freeform._createNewEvent("flatpickr-ready");d.detail=l,a.dispatchEvent(d)}},c=function(){var t=document.createElement("script");t.src=e.locale,t.addEventListener("load",i),document.body.appendChild(t)},i=function(){r()};if(Freeform.datepickerScript)Freeform.datepickerScript.addEventListener("load",c);else{var l=document.createElement("script");l.src=e.js,l.addEventListener("load",c),document.body.appendChild(l);var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.media="all",d.href=e.css,document.getElementsByTagName("head")[0].appendChild(d),Freeform.datepickerScript=l}}();