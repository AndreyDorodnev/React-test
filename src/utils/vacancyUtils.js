export const getSalaryStr = (salary) => {
    if(salary){
        const from = salary.from? `от ${salary.from}` : '';
        const to = salary.to? `до ${salary.to}` : '';
        return `${from} ${to} ${salary.currency}`;
    } else {
        return 'не указана';
    }

}

export const getAddressStr = (address) => {
    return address? `${address.city}` : 'не указан';
}

export const getRequirement = (snippet) => {
    return snippet.requirement? snippet.requirement : 'не указаны';
}

export const getResponsibilities = (snippet) => {
    return snippet.responsibility? snippet.responsibility : 'не указаны';
}