// for in loop or in others language it's called for-each or enhance for loop
// works for both object and loop




// for object
let info = {
    name: "rafiul",
    age: 24,
    friends:["Rasel", "Sojib"]
}

for(abc in info){
    // console.log(abc);   // abc is index no, so it will print "name, age, friends"
    console.log(info[abc]); 
}








//for array
let name = ["rafiul", "rasel", "sojib"];

for(def in name){
    console.log(name[def]);  // basically def return index "0 1 2". so accessing its data: name[def];
}