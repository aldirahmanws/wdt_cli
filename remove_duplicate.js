function removeDuplicate(data) {
    const set = new Set(data)
    return [...set]
}
console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]))