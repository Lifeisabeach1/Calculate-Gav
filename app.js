const addPurchase = () => {
    const purchaseContainer = document.querySelector('#purchaseContainer');
    const purchaseCount = purchaseContainer.querySelectorAll('.purchase').length + 1;
    const newPurchase = document.createElement('div');
    newPurchase.classList.add('purchase');
    newPurchase.innerHTML = `
        <label>Purchasing moments ${purchaseCount}:</label>
        <label>Amount of stocks</label>
        <input type="number" class="shares" required>
        <label>Price per share</label>
        <input type="number" class="price" step="0.01" required>
    `;
    purchaseContainer.appendChild(newPurchase);
}

const resetForm = () => {
    document.querySelector('#purchaseContainer').innerHTML = `
        <div class="purchase">
            <label>Purchasing moment 1:</label>
            <label>Amount of stocks</label>
            <input type="number" class="shares" required>
            <label>Price per share</label>
            <input type="number" class="price" step="0.01" required>
        </div>
    `;
    document.getElementById('gav').innerText = '-';
}

const calculateGAV = () => {
    const purchases = document.getElementsByClassName('purchase');
    let totalShares = 0;
    let totalCost = 0;

    for (const purchase of purchases) {
        const shares = parseFloat(purchase.getElementsByClassName('shares')[0].value);
        const price = parseFloat(purchase.getElementsByClassName('price')[0].value);
        
        if (!isNaN(shares) && !isNaN(price)) {
            totalShares += shares;
            totalCost += shares * price;
        }
    }

    const gav = totalShares ? (totalCost / totalShares).toFixed(2) : '';
    document.getElementById('gav').innerText = gav;
}
