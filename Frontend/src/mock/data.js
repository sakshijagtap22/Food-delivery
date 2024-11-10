// Sample restaurants
export const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      cuisine: "Italian",
      rating: 4.5,
      menu: [
        { id: 1, name: "Margherita Pizza", price: 8.99 },
        { id: 2, name: "Pepperoni Pizza", price: 10.99 },
      ],
    },
    {
      id: 2,
      name: "Sushi Central",
      cuisine: "Japanese",
      rating: 4.7,
      menu: [
        { id: 3, name: "Salmon Nigiri", price: 6.99 },
        { id: 4, name: "Tuna Roll", price: 7.99 },
      ],
    },
    {
      id: 3,
      name: "Veggie Delight",
      cuisine: "Vegetarian",
      rating: 4.2,
      menu: [
        { id: 5, name: "Veggie Wrap", price: 5.99 },
        { id: 6, name: "Falafel Bowl", price: 7.49 },
      ],
    },
  ];
  
  // Sample users
  export const users = {
    customer: { id: 1, name: "John Doe", address: "123 Elm St", email: "john@example.com" },
    restaurantOwner: { id: 2, name: "Chef Mario", restaurant: "Pizza Palace" },
    deliveryPersonnel: { id: 3, name: "Sarah Brown", vehicle: "Bike" },
    admin: { id: 4, name: "Admin User" },
  };
  
  // Sample orders
  export const orders = [
    {
      id: 1,
      customer: "John Doe",
      restaurant: "Pizza Palace",
      items: [
        { name: "Margherita Pizza", quantity: 1, price: 8.99 },
        { name: "Pepperoni Pizza", quantity: 1, price: 10.99 },
      ],
      status: "Preparing",
      total: 19.98,
    },
    {
      id: 2,
      customer: "Jane Smith",
      restaurant: "Sushi Central",
      items: [{ name: "Salmon Nigiri", quantity: 2, price: 6.99 }],
      status: "Out for Delivery",
      total: 13.98,
    },
  ];
  