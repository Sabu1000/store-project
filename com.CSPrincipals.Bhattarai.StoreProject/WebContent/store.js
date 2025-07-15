/**
 * Phone Store JavaScript
 */

var totalItems = 0;
var totalCost = 0.0;

const phones = ["Iphone 14", "Iphone 13", "Iphone 12", "Iphone 11", "Samsung S22", "Samsung S21", "Samsung S20", "Google 6"];
const costs = [1000, 900, 800, 700, 1000, 900, 800, 900];
let quantity = Array(phones.length).fill(0); // Initializes an array of 0s
let selectedPhoneIndex = -1; // Tracks the currently selected phone

/**
 * Synchronizes the `quantity` array and `totalCost` with the data in sessionStorage.
 */
function syncCartWithSessionStorage() {
    totalItems = 0;
    totalCost = 0.0;

    for (let i = 0; i < phones.length; i++) {
        const storedQuantity = parseInt(sessionStorage.getItem(phones[i]) || 0);
        quantity[i] = storedQuantity; // Update the quantity array
        totalItems += storedQuantity;
        totalCost += storedQuantity * costs[i];
    }
}

/**
 * Displays the clicked phone's details and updates the selectedPhoneIndex.
 */
function display(thing) {
    const phoneName = thing.getAttribute("name"); // Get the phone's name from the `name` attribute
    const index = phones.indexOf(phoneName); // Find the index of the phone in the `phones` array

    if (index !== -1) {
        // Update the selected phone's details
        document.getElementById("cost").innerHTML = `Cost: $${costs[index]}`;
        document.getElementById("caption").innerHTML = phoneName; // Display the phone's name
        selectedPhoneIndex = index; // Set the selected phone index

        // Display the big image
        document.getElementById("bigPic").style.display = "block";
        document.getElementById("bigPic").innerHTML = `
            <img src="${thing.src}" alt="Selected Phone" style="width: 200px; height: 200px; object-fit: cover;">
        `;
    } else {
        alert("Selected phone not found.");
    }
}

/**
 * Adds the selected phone to the cart.
 */
function addToCart() {
    if (selectedPhoneIndex === -1) {
        alert("No items are selected");
        return;
    }

    // Increment total cost and total items
    totalCost += costs[selectedPhoneIndex];
    totalItems += 1;

    // Update the quantity of the selected phone
    quantity[selectedPhoneIndex]++;
    sessionStorage.setItem(phones[selectedPhoneIndex], quantity[selectedPhoneIndex]);

    // Save the total items count to sessionStorage
    sessionStorage.setItem("totalItems", totalItems);

    // Update the UI with the updated cart details
    document.getElementById("totalPrice").innerHTML = `Total: $${totalCost.toFixed(2)}`;
    document.getElementById("numberOfCartItems").innerHTML = `Number of Items: ${totalItems}`;
}

/**
 * Restores the cart's item count and total cost on page load.
 */
function restoreCartItems() {
    // Synchronize the cart with sessionStorage
    syncCartWithSessionStorage();

    // Update the UI
    document.getElementById("numberOfCartItems").innerHTML = `Number of Items: ${totalItems}`;
    document.getElementById("totalPrice").innerHTML = `Total: $${totalCost.toFixed(2)}`;
}

/**
 * Displays the cart contents from sessionStorage.
 */
function printSessionStorage() {
    syncCartWithSessionStorage(); // Synchronize the cart with sessionStorage

    const table = document.getElementById("table");
    table.innerHTML = ""; // Clear previous cart details

    for (let index in phones) {
        const itemQuantity = quantity[index]; // Get the quantity from the synchronized array
        if (itemQuantity > 0) {
            const itemCost = costs[index] * itemQuantity;

            // Add a row to the cart table
            table.innerHTML += `
                <tr>
                    <td><img class="pics" src="images/${phones[index].toLowerCase().replace(/ /g, "")}.jpg" style="width: 100px; height: 100px; object-fit: cover;"></td>
                    <td>Name: ${phones[index]}</td>
                    <td>Quantity: ${itemQuantity}</td>
                    <td>Cost (per unit): $${costs[index]}</td>
                    <td>Total: $${itemCost}</td>
                    <td>
                        <button onclick="removeFromCart(${index})" class="removeButton">Remove</button>
                    </td>
                </tr>
            `;
        }
    }

    document.getElementById("totalPriceTwo").innerHTML = `Total Cost: $${totalCost.toFixed(2)}`;
    document.getElementById("numberOfCartItemsTwo").innerHTML = `Total Items: ${totalItems}`;
}

/**
 * Removes an item from the cart.
 */
function removeFromCart(index) {
    if (quantity[index] > 0) {
        // Decrease the quantity
        quantity[index]--;
        sessionStorage.setItem(phones[index], quantity[index]);

        // If the quantity becomes 0, remove the item from storage
        if (quantity[index] === 0) {
            sessionStorage.removeItem(phones[index]);
        }

        // Update total items and save to sessionStorage
        totalItems -= 1;
        totalCost -= costs[index];
        sessionStorage.setItem("totalItems", totalItems);

        // Recalculate totals and refresh the cart display
        printSessionStorage();
    }
}

/**
 * Completes the order and clears the cart.
 */
function completeOrder() {
    if (!confirm("Are you sure you want to complete this order?")) {
        alert("Order not completed.");
        return;
    }

    // Gather cart items
    syncCartWithSessionStorage();

    const cartItems = [];
    for (let i = 0; i < phones.length; i++) {
        if (quantity[i] > 0) {
            cartItems.push({
                name: phones[i],
                price: costs[i],
                quantity: quantity[i]
            });
        }
    }

    if (cartItems.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    // Prepare order data
    const orderData = {
        items: cartItems,
        totalCost: totalCost,
        totalItems: totalItems
    };

    // Send order data to the backend
    fetch('http://localhost:3000/save-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Show success message
        sessionStorage.clear(); // Clear cart
        location.reload(); // Refresh page
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Failed to complete order.");
    });
}

// Call this function when the home page loads
restoreCartItems();
