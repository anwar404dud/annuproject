document.addEventListener('DOMContentLoaded', () => {
    const prices = {
        chicken: {
            1: '10 USD',
            2: '20 USD',
            3: '30 USD'
        },
        mutton: {
            1: '15 USD',
            2: '25 USD'
        }
    };

    document.querySelectorAll('span.price').forEach(item => {
        item.addEventListener('click', () => {
            const type = item.getAttribute('data-item');
            const weight = item.getAttribute('data-weight');
            const price = prices[type][weight];
            alert(`The price for ${weight}kg of ${type} biryani is ${price}.`);
        });
    });
});