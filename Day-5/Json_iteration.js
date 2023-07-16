var json = [{
    "Name" : "Mohanapriya", 
    "Age"   : 35,
    "Guvi_batch" : "B49_tamil",
    "Course": "Mern stack development"
},
{
    "Name" : "priya", 
    "Age"   : 45,
    "Guvi_batch" : "B47_tamil",
    "Course": "Datascience"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.Name);
    console.log(obj.Age);
    console.log(obj.Guvi_batch);
    console.log(obj.Course);

}
//for Each
json.forEach(function(obj) { console.log(obj.Course; });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].Name);
}
}
//for Of
let text = "";
for (let x of json[key].Name) {
 text += x; 
}
 console.log(text);