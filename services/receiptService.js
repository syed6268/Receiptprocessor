const { v4: uuidv4 } = require('uuid');

const receipts = {};

const calculatePoints = (receipt) => {
    let points = 0;

    // One point for every alphanumeric character in the retailer name.
    const retailer = receipt.retailer.replace(/[^a-zA-Z0-9]/g, '');
    points += retailer.length;

    // 50 points if the total is a round dollar amount with no cents.
    const total = parseFloat(receipt.total);
    if (total % 1 === 0) points += 50;

    // 25 points if the total is a multiple of 0.25.
    if (total % 0.25 === 0) points += 25;

    // 5 points for every two items on the receipt.
    points += Math.floor(receipt.items.length / 2) * 5;

    // If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer.
    receipt.items.forEach(item => {
        const trimmedLength = item.shortDescription.trim().length;
        if (trimmedLength % 3 === 0) {
            points += Math.ceil(parseFloat(item.price) * 0.2);
        }
    });

    // 6 points if the day in the purchase date is odd.
    const day = parseInt(receipt.purchaseDate.split('-')[2]);
    if (day % 2 !== 0) points += 6;

    // 10 points if the time of purchase is after 2:00pm and before 4:00pm.
    const hour = parseInt(receipt.purchaseTime.split(':')[0]);
    const minute = parseInt(receipt.purchaseTime.split(':')[1]);
    if ((hour === 14 && minute >= 0) || (hour === 15 && minute < 60)) points += 10;

    return points;
};

const processReceipt = (receipt) => {
    const id = uuidv4();
    receipt.id = id;
    receipt.points = calculatePoints(receipt);
    receipts[id] = receipt;
    return { id };
};

const getReceiptPoints = (id) => {
    const receipt = receipts[id];
    if (receipt) {
        return { points: receipt.points };
    } else {
        throw new Error('Receipt not found');
    }
};

module.exports = {
    processReceipt,
    getReceiptPoints
};
