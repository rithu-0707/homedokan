// Product database for all categories
const productsData = {
  vegetables: [
    { id: 1, name: 'Tomatoes', price: 50, unit: '/ kg', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80' },
    { id: 2, name: 'Potatoes', price: 45, unit: '/ kg', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80' },
    { id: 3, name: 'Carrots', price: 65, unit: '/ kg', image: 'https://images.unsplash.com/photo-1633380110125-f6e685676160?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fHww' },
    { id: 4, name: 'Broccoli', price: 85, unit: '/ piece', image: 'https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJvY29sbGl8ZW58MHx8MHx8fDA%3D' },
    { id: 5, name: 'Red Onions', price: 55, unit: '/ kg', image: 'https://images.unsplash.com/photo-1668295037469-8b0e8d11cd2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVkJTIwb25pb258ZW58MHx8MHx8fDA%3D' },
    { id: 6, name: 'Bell Peppers', price: 110, unit: '/ kg', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80' },
    { id: 7, name: 'Cauliflower', price: 70, unit: '/ piece', image: 'https://images.unsplash.com/photo-1566842600175-97dca489844f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D' },
    { id: 8, name: 'Spinach', price: 40, unit: '/ bunch', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80' }
  ],
  fruits: [
    { id: 9, name: 'Red Apples', price: 120, unit: '/ kg', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80' },
    { id: 10, name: 'Bananas', price: 60, unit: '/ dozen', image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=600&q=80' },
    { id: 11, name: 'Oranges', price: 90, unit: '/ kg', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JhbmdlfGVufDB8fDB8fHww' },
    { id: 12, name: 'Pineapple', price: 95, unit: '/ piece', image: 'https://images.unsplash.com/photo-1621409443141-46c42dc0afb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGluZWFwcGxlfGVufDB8fDB8fHww' },
    { id: 13, name: 'Strawberries', price: 160, unit: '/ box', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80' },
    { id: 14, name: 'Green Grapes', price: 130, unit: '/ kg', image: 'https://media.istockphoto.com/id/489520104/photo/green-grape-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=wgd0VVD_5P7LNMmnstGQ4FaG1FsLaIwCSxkyfuxXsNo=' },
    { id: 15, name: 'Watermelon', price: 80, unit: '/ piece', image: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=600&q=80' },
    { id: 16, name: 'Mangoes', price: 150, unit: '/ kg', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80' }
  ],
  dairy: [
    { id: 17, name: 'Fresh Milk', price: 55, unit: '/ litre', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b143?auto=format&fit=crop&w=600&q=80' },
    { id: 18, name: 'Cheddar Cheese', price: 180, unit: '/ pack', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80' },
    { id: 19, name: 'Farm Eggs', price: 75, unit: '/ 6 pieces', image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=600&q=80' },
    { id: 20, name: 'Natural Yogurt', price: 60, unit: '/ cup', image: 'https://images.unsplash.com/photo-1571212515416-fca77afa19f1?auto=format&fit=crop&w=600&q=80' },
    { id: 21, name: 'Salted Butter', price: 65, unit: '/ pack', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80' },
    { id: 22, name: 'Fresh Paneer', price: 120, unit: '/ pack', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80' },
    { id: 23, name: 'Fresh Cream', price: 90, unit: '/ pack', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80' },
    { id: 24, name: 'Buttermilk', price: 35, unit: '/ bottle', image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80' }
  ],
  bakery: [
    { id: 25, name: 'Wheat Bread', price: 40, unit: '/ loaf', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
    { id: 26, name: 'Brown Bread', price: 50, unit: '/ loaf', image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&q=80' },
    { id: 27, name: 'Croissants', price: 80, unit: '/ pack', image: 'https://images.unsplash.com/photo-1585518419759-3cd4808ebc41?auto=format&fit=crop&w=600&q=80' },
    { id: 28, name: 'Cookies', price: 60, unit: '/ pack', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80' },
    { id: 29, name: 'Muffins', price: 70, unit: '/ pack', image: 'https://images.unsplash.com/photo-1607920591413-a4ec88bd0d2f?auto=format&fit=crop&w=600&q=80' },
    { id: 30, name: 'Donuts', price: 100, unit: '/ half dozen', image: 'https://images.unsplash.com/photo-1553909764-5a6a9f592537?auto=format&fit=crop&w=600&q=80' },
    { id: 31, name: 'Cake Slice', price: 120, unit: '/ piece', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80' },
    { id: 32, name: 'Biscuits', price: 45, unit: '/ pack', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?auto=format&fit=crop&w=600&q=80' }
  ],
  'cleaning-essentials': [
    { id: 33, name: 'Dish Soap', price: 80, unit: '/ bottle', image: 'https://images.unsplash.com/photo-1585968981957-b1d71c0d1f49?auto=format&fit=crop&w=600&q=80' },
    { id: 34, name: 'Floor Cleaner', price: 120, unit: '/ bottle', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80' },
    { id: 35, name: 'Laundry Detergent', price: 200, unit: '/ kg', image: 'https://images.unsplash.com/photo-1596040033529-2bb5c2a8c0ab?auto=format&fit=crop&w=600&q=80' },
    { id: 36, name: 'Glass Cleaner', price: 90, unit: '/ bottle', image: 'https://images.unsplash.com/photo-1581578731548-c64695b952952?auto=format&fit=crop&w=600&q=80' },
    { id: 37, name: 'Toilet Cleaner', price: 100, unit: '/ bottle', image: 'https://images.unsplash.com/photo-1516541497487-3917ca2e0619?auto=format&fit=crop&w=600&q=80' },
    { id: 38, name: 'Hand Sanitizer', price: 70, unit: '/ bottle', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80' },
    { id: 39, name: 'Bleach', price: 110, unit: '/ bottle', image: 'https://images.unsplash.com/photo-1599343170673-b92e88f76a3b?auto=format&fit=crop&w=600&q=80' },
    { id: 40, name: 'Sponges', price: 50, unit: '/ pack', image: 'https://images.unsplash.com/photo-1584622614875-4381c28e40fd?auto=format&fit=crop&w=600&q=80' }
  ],
  'cooking-essentials': [
    { id: 41, name: 'Olive Oil', price: 450, unit: '/ 500ml', image: 'https://images.unsplash.com/photo-1474921910891-fa73b96ac90e?auto=format&fit=crop&w=600&q=80' },
    { id: 42, name: 'Salt', price: 25, unit: '/ kg', image: 'https://images.unsplash.com/photo-1596601796847-28a88e7ae232?auto=format&fit=crop&w=600&q=80' },
    { id: 43, name: 'Sugar', price: 40, unit: '/ kg', image: 'https://images.unsplash.com/photo-1568861060-78d02eb1e4c5?auto=format&fit=crop&w=600&q=80' },
    { id: 44, name: 'Rice', price: 80, unit: '/ kg', image: 'https://images.unsplash.com/photo-1586857599644-f4e0bcc72b0e?auto=format&fit=crop&w=600&q=80' },
    { id: 45, name: 'Flour', price: 35, unit: '/ kg', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?auto=format&fit=crop&w=600&q=80' },
    { id: 46, name: 'Dal', price: 120, unit: '/ kg', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?auto=format&fit=crop&w=600&q=80' },
    { id: 47, name: 'Spices Mix', price: 150, unit: '/ 100g', image: 'https://images.unsplash.com/photo-1587049158078-4587fe0d9d0a?auto=format&fit=crop&w=600&q=80' },
    { id: 48, name: 'Vinegar', price: 60, unit: '/ 500ml', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?auto=format&fit=crop&w=600&q=80' }
  ]
};
