function character(words) {
    words = words.split(" ").join("").split("")
    for (let i = 0; i < words.length; i++) {
        for (var o = 0; o < words.length; o++) {
            if (i != o && words[i] == words[o]) {
                break;
            }
        }
        if (o == words.length) {
            return words[i];
        }
    }
    return null
}

console.log(character("the quick brown fox jumps then quickly blow air"));
