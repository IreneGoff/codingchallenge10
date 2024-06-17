// example.js

// Function that loads and displays purchase order data
function loadPurchaseOrders() {
    // Path to CSV file
    const csvFilePath = 'data/purchase_orders.csv';

    // Utilize d3.dsv to load CSV files
    d3.csv(csvFilePath).then(data => {
        // Select the UL element where list items will be appended
        const orderList = d3.select('#order-list');

        // Iterate over each data entry and create a list item
        data.forEach(order => {
            // Create a new LI element
            const listItem = orderList.append('li');

            // Set text content of the list item
            listItem.text(`${order.customerName} - Order ID: ${order.orderId} - Purchase Amount: ${order.purchaseAmount}`);
        });
    }).catch(error => {
        console.error('Error loading the CSV file:', error);
    });
}

// Call the function to load and display purchase orders
loadPurchaseOrders();
