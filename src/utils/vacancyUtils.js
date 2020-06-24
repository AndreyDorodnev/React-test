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