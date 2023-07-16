//Remove duplicates from an Array
//Anonymous Function : 
function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                      }
//IIFE :                
(function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                       })([1,1,2,3,4])
