//Convert all the strings to title caps in a string array
   
//anonymous :  
 function (str) {
                   str = str.toLowerCase().split(' ');
                   for (var i = 0; i < str.length; i++) {
                     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                   } 
                   return str.join(' ');
                 }
//IIFE :
 (function (str) {
                   str = str.toLowerCase().split(' ');
                   for (var i = 0; i < str.length; i++) {
                     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                   } 
                   return str.join(' ');
                 })("MOHANA PRIYAS");
