function removeDuplicates(arrStr){
    let str = arrStr.toString()
    let newStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    console.log(newStr.replace(/[^\w\s]|(.)(?=\1)/gi, "").split(''))
}

removeDuplicates(["g", "g", "y", "c", "c", "c", "q", "c", "y", "y"])