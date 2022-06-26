function reverse(words) {
    var result = words.split(" ")
    
    result.forEach(function(element,index){
        result[index] = element.split("").reverse().join("")
    });
    return result.join(" ")
}
console.log(reverse("what is your name"))
