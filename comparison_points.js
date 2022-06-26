var a = [5,6,7]
var b = [3,6,10]
var pointA = 0
var pointB = 0

for (let index = 0; index < a.length; index++) {
    if(a[index] > b[index]){
        pointA++
    } else if(a[index] < b[index]) {
        pointB++
    }
    
}
console.log(`A got ${pointA} point`)
console.log(`B got ${pointB} point`)