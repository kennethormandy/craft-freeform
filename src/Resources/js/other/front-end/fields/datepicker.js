"use strict";!function(){var e={js:"//cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.1/flatpickr.min.js",css:"//cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.1/flatpickr.min.css",locale:"//cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.1/l10n/{locale}.js"},t="{formAnchor}",a=!1,r=!1,c=document.querySelector('form[data-id="'.concat(t,'"]'));if(!c)return void console.error('Recaptcha could not find form by ID "'.concat(t,'"'));if(!c.freeform)return void console.error("Form is not a freeform form");var i=function(){if(a&&r){var e=c.querySelectorAll("*[data-datepicker]"),t=!0,i=!1,l=void 0;try{for(var n,d=e[Symbol.iterator]();!(t=(n=d.next()).done);t=!0){var o=n.value,m={disableMobile:!0,allowInput:!0,dateFormat:o.getAttribute("data-datepicker-format"),enableTime:null!==o.getAttribute("data-datepicker-enabletime"),noCalendar:null===o.getAttribute("data-datepicker-enabledate"),time_24hr:null!==o.getAttribute("data-datepicker-clock_24h"),minDate:o.getAttribute("data-datepicker-min-date"),maxDate:o.getAttribute("data-datepicker-max-date"),minuteIncrement:1,hourIncrement:1,locale:o.getAttribute("data-datepicker-locale"),"static":null!==o.getAttribute("data-datepicker-static")},s=new CustomEvent("flatpickr-before-init",{detail:m});c.dispatchEvent(s);var u=flatpickr(o,s.detail),f=new CustomEvent("flatpickr-ready",{detail:u});c.dispatchEvent(f)}}catch(p){i=!0,l=p}finally{try{t||null==d["return"]||d["return"]()}finally{if(i)throw l}}}},l=function(){a=!0,i()},n=function(){r=!0,i()};if(Freeform.datepickerScript)Freeform.datepickerScript.addEventListener("load",i);else{Freeform.datepickerScript=!0;var d=document.createElement("script");d.src=e.js,d.addEventListener("load",l),document.body.appendChild(d);var o=document.createElement("script");o.src=e.locale,o.addEventListener("load",n),document.body.appendChild(o);var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.media="all",m.href=e.css,document.getElementsByTagName("head")[0].appendChild(m),Freeform.datepickerScript=d}}();