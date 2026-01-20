export function formatPLN(value) {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    return new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
        minimumFractionDigits: 2
    }).format(num);
}
export function formatDate(date) {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('pl-PL').format(d);
}
export function formatPercent(value) {
    return new Intl.NumberFormat('pl-PL', {
        style: 'percent',
        minimumFractionDigits: 2
    }).format(value / 100);
}
