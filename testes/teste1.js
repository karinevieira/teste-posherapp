function isSubsequent (arr1, arr2){
    let arr3 = arr1.filter(arr1Item => arr2.includes(arr1Item))
    
    let subArr = (arr2.length == arr3.length) && arr2.every(function(e, i) {
        return e === arr3[i]; 
    })

    return subArr
}

console.log(isSubsequent([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))

