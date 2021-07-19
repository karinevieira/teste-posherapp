const removeDuplicates = s => s.replace(/[^\w\s]|(.)(?=\1)/gi, "").split('')


console.log(removeDuplicates("ggycccqcyy"))
    