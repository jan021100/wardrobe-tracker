document.addEventListener('DOMContentLoaded', () => {
    const wardrobeTable = document.getElementById('wardrobe-table').getElementsByTagName('tbody')[0];
    
    // Function to add new items
    function addItem(brand, product, category, price, wears, lastWorn) {
        const row = wardrobeTable.insertRow();
        // Add cells and populate them with values...
    }

    // Form submission handler
    document.getElementById('add-item-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Gather form data and add new item...
    });
    
    // Example: Add sample item
    addItem('Rapha', 'Pro Team Insulated Jacket', 'Jacket', 160, 8, '16.11.23');
});
