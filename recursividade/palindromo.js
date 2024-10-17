function isPalindrome(text){
    const arrayChar = text.split('')

    if(arrayChar.length === 0){
        return true
    }

    if(arrayChar[0] != arrayChar[arrayChar.length -1]){
        return false
    }

    arrayChar.shift()
    arrayChar.pop()

    return isPalindrome(arrayChar.join(''))
}

//RECURSIVIDADE DE CALDA
function isPalindrome2(text){
    return isPalindromeRecursive(text, 0, text.length-1)
}

function isPalindromeRecursive(text, start, end){
    if(start >= end){
        return true
    }
    
    if(text[start] !== text[end]){
        return false
    }

    return isPalindromeRecursive(text, start + 1, end - 1)
}

console.log(isPalindrome2("abcfba"));
