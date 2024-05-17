function whosPaying(names) {
    var nmbr = names.length;
    var random1 = Math.random() * nmbr;
    random1 = Math.floor(random1);
    return(names[random1] +" is going to buy lunch today!");
}
var names = ["luffy", "Naruto","Goku","Gintama","Mikasa"];
var me = whosPaying(names);
console.log(me);
