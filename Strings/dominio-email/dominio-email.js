

function extractEmailInformation(email){
    const part = email.split('@');
    const name = part[0];
    const domain = part[1];

    const inBrazilian = domain.endsWith('.br')
    return {name, domain, inBrazilian};
}

console.log(extractEmailInformation('joao.silva23@yahoo.com.br'))
console.log(extractEmailInformation('maria123@gmail.com'))