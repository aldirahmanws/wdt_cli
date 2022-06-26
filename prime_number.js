function isPrime(angka) {
    let pembagi = 0
    for (let index = 0; index <= angka; index++) {
        if(angka%index == 0){
            pembagi++
        }
        
    }    
    if(pembagi == 2){
        return true;
    } else {
        return false;
    }
}
console.log(isPrime(137))
console.log(isPrime(237))