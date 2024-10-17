function isAnagram(s, t){
    const palavra1 = s.toLowerCase();
    const palavra2 = t.toLowerCase();

    if(palavra1.length !== palavra2.length){
        return false;
    }

    const ordenada1 = palavra1.split('').sort().join('')
    const ordenada2 = palavra2.split('').sort().join('')

    return ordenada1 === ordenada2
}


console.log(isAnagram('roma', 'amor'))