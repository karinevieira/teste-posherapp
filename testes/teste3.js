function verifyPalindromes(arrString) {
    let palindromeArr = []
    for(let str of arrString){
        if(str == str.toString().split('').reverse().join('')){
            palindromeArr.push('true')
        }
        else {
            palindromeArr.push('false')
        }
    }
    return palindromeArr
}

console.log(verifyPalindromes(["arara", "jabuticaba", "asa", "caminhao"]))

