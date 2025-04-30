export async function GET() {
    const ourProducts = [
      { id: 1, name: "Gaming Headphones", price: "BDT 3,00,000", image: "/images/Gaming Headphones.png" },
      { id: 2, name: "Gaming Keyboard", price: "BDT 500", image: "/images/Gaming Keyboard.png" },
      { id: 3, name: "T-Shirt", price: "BDT 10,000", image: "/images/T-Shirt.png" },
      { id: 4, name: "Sunglass", price: "BDT 300", image: "/images/Sunglass.png" },
      { id: 5, name: "Black Fancy Bag", price: "BDT 150", image: "/images/Black Fancy Bag.png" },
      { id: 6, name: "Portable SSD", price: "BDT 800", image: "/images/Portable SSD.png" },
      { id: 7, name: "Canon", price: "BDT 2,500", image: "/images/Canon.png" },
      { id: 8, name: "Fancy Maroon Bag", price: "BDT 2,500", image: "/images/Fancy Maroon Bag.png" },
    ];
  
    return new Response(JSON.stringify(ourProducts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }