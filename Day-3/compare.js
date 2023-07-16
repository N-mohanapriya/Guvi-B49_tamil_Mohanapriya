let obj1 = {name:"Person 1",age:5};

let obj2 = {age:5, name:"Person 1"};

  if(Object.keys(obj1).length == Object.keys(obj2).length) {
  for(let key in obj1) {
    if(obj2.hasOwnProperty(key) && obj1[key] == obj2[key]) {
      console.log("obj1 and obj2 ",key,"values are equal")
    }
    else{
        console.log("obj1 and obj2 ",key,"values are not equal")
        }
      }
      
}
else
console.log("obj1 is not equal to obj2");