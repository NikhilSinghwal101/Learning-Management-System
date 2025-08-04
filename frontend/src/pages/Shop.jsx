// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// // const dummyBooks = [
// //   {
// //     id: 1,
// //     title: "JavaScript Essentials",
// //     author: "John Doe",
// //     price: 499,
// //     image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
// //   },
// //   {
// //     id: 2,
// //     title: "Mastering React",
// //     author: "Jane Smith",
// //     price: 599,
// //     image: "https://covers.openlibrary.org/b/id/10516713-L.jpg",
// //   },
// //   {
// //     id: 3,
// //     title: "Data Structures in JS",
// //     author: "Alex Grey",
// //     price: 699,
// //     image: "https://covers.openlibrary.org/b/id/11032765-L.jpg",
// //   },
// //   {
// //     id: 4,
// //     title: "Node.js Deep Dive",
// //     author: "Kevin Hart",
// //     price: 649,
// //     image: "https://covers.openlibrary.org/b/id/10475754-L.jpg",
// //   },
// //   {
// //     id: 5,
// //     title: "Python for Beginners",
// //     author: "Emily Carter",
// //     price: 549,
// //     image: "https://covers.openlibrary.org/b/id/11109372-L.jpg",
// //   },
// //   {
// //     id: 6,
// //     title: "Machine Learning 101",
// //     author: "Michael Lane",
// //     price: 799,
// //     image: "https://covers.openlibrary.org/b/id/10487535-L.jpg",
// //   },
// //   {
// //     id: 7,
// //     title: "Intro to Databases",
// //     author: "Rachel Green",
// //     price: 450,
// //     image: "https://covers.openlibrary.org/b/id/10909258-L.jpg",
// //   },
// //   {
// //     id: 8,
// //     title: "Frontend UI/UX Design",
// //     author: "Samuel Bright",
// //     price: 620,
// //     image: "https://covers.openlibrary.org/b/id/10327604-L.jpg",
// //   },
// //   {
// //     id: 9,
// //     title: "Learning MongoDB",
// //     author: "Laura Dean",
// //     price: 575,
// //     image: "https://covers.openlibrary.org/b/id/10506465-L.jpg",
// //   },
// //   {
// //     id: 10,
// //     title: "The Git Guide",
// //     author: "Chris Evans",
// //     price: 399,
// //     image: "https://covers.openlibrary.org/b/id/10934995-L.jpg",
// //   },
// //   {
// //     id: 11,
// //     title: "Clean Code",
// //     author: "Robert C. Martin",
// //     price: 899,
// //     image: "https://covers.openlibrary.org/b/id/8097440-L.jpg",
// //   },
// //   {
// //     id: 12,
// //     title: "System Design Basics",
// //     author: "Ankita Rao",
// //     price: 720,
// //     image: "https://covers.openlibrary.org/b/id/11001549-L.jpg",
// //   },
// // ];

// const dummyBooks = [
//   {
//     id: 1,
//     title: "JavaScript Essentials",
//     author: "John Doe",
//     price: 499,
//     image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
//     category: "JavaScript",
//   },
//   {
//     id: 2,
//     title: "Mastering React",
//     author: "Jane Smith",
//     price: 599,
//     image: "https://covers.openlibrary.org/b/id/10516713-L.jpg",
//     category: "React",
//   },
//   {
//     id: 3,
//     title: "Data Structures in JS",
//     author: "Alex Grey",
//     price: 699,
//     image: "https://covers.openlibrary.org/b/id/11032765-L.jpg",
//     category: "Data",
//   },
//   {
//     id: 4,
//     title: "Node.js Deep Dive",
//     author: "Kevin Hart",
//     price: 649,
//     image: "https://covers.openlibrary.org/b/id/10475754-L.jpg",
//     category: "Node",
//   },
//   {
//     id: 5,
//     title: "Python for Beginners",
//     author: "Emily Carter",
//     price: 549,
//     image: "https://covers.openlibrary.org/b/id/11109372-L.jpg",
//     category: "Python",
//   },
//   {
//     id: 6,
//     title: "Machine Learning 101",
//     author: "Michael Lane",
//     price: 799,
//     image: "https://covers.openlibrary.org/b/id/10487535-L.jpg",
//     category: "ML",
//   },
//   {
//     id: 7,
//     title: "Intro to Databases",
//     author: "Rachel Green",
//     price: 450,
//     image: "https://covers.openlibrary.org/b/id/10909258-L.jpg",
//     category: "Database",
//   },
//   {
//     id: 8,
//     title: "Frontend UI/UX Design",
//     author: "Samuel Bright",
//     price: 620,
//     image: "https://covers.openlibrary.org/b/id/10327604-L.jpg",
//     category: "Design",
//   },
//   {
//     id: 9,
//     title: "Learning MongoDB",
//     author: "Laura Dean",
//     price: 575,
//     image: "https://covers.openlibrary.org/b/id/10506465-L.jpg",
//     category: "Database",
//   },
//   {
//     id: 10,
//     title: "The Git Guide",
//     author: "Chris Evans",
//     price: 399,
//     image: "https://covers.openlibrary.org/b/id/10934995-L.jpg",
//     category: "Git",
//   },
//   {
//     id: 11,
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     price: 899,
//     image: "https://covers.openlibrary.org/b/id/8097440-L.jpg",
//     category: "Clean Code",
//   },
//   {
//     id: 12,
//     title: "System Design Basics",
//     author: "Ankita Rao",
//     price: 720,
//     image: "https://covers.openlibrary.org/b/id/11001549-L.jpg",
//     category: "System Design",
//   },
// ];

// const Shop = () => {
//   const [books, setBooks] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [cartOpen, setCartOpen] = useState(false);

//   const booksPerPage = 9;

//   useEffect(() => {
//     setBooks(dummyBooks);
//     const storedCart = localStorage.getItem("cartItems");
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [currentPage]);

//   const addToCart = (book) => {
//     if (cartItems.find((item) => item.id === book.id)) {
//       toast.error("Book already in cart!");
//     } else {
//       setCartItems([...cartItems, book]);
//       toast.success(`Added "${book.title}" to cart!`);
//     }
//   };

//   const removeFromCart = (id) => {
//     const removedItem = cartItems.find((item) => item.id === id);
//     setCartItems(cartItems.filter((item) => item.id !== id));
//     toast.success(`Removed "${removedItem?.title}" from cart`);
//   };

//   const clearCart = () => {
//     setCartItems([]);
//     toast.info("Cart cleared");
//   };

//   const getTotal = () => cartItems.reduce((acc, item) => acc + item.price, 0);

//   const handleCheckout = () => {
//     toast.info("Proceeding to checkout...");
//     setTimeout(() => {
//       alert("✅ Checkout simulated! (You can integrate Razorpay here)");
//     }, 300);
//   };

//   const filteredBooks = books.filter((book) =>
//     book.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const indexOfLast = currentPage * booksPerPage;
//   const indexOfFirst = indexOfLast - booksPerPage;
//   const currentBooks = filteredBooks.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

//   return (
//     <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
//       {/* 📱 Mobile Cart Button */}
//       <div className="md:hidden fixed bottom-16 right-6 z-30">
//         <button
//           onClick={() => setCartOpen(true)}
//           className="relative bg-blue-600 p-3 rounded-full shadow-lg"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="white"
//             strokeWidth={2}
//             className="w-6 h-6"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
//             />
//           </svg>
//           {cartItems.length > 0 && (
//             <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
//               {cartItems.length}
//             </span>
//           )}
//         </button>
//       </div>

//       {/* 📚 Book Section */}
//       <div className="w-full md:w-3/4 overflow-y-auto h-screen px-6 md:px-12 py-4 md:py-12">
//         <h1 className="text-xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
//           🛒 EduAll Bookstore
//         </h1>

//         <input
//           type="text"
//           placeholder="Search books..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="mb-6 px-4 py-2 w-full max-w-md rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
//         />

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//           {currentBooks.map((book) => (
//             <div
//               key={book.id}
//               className="bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col h-full"
//             >
//               <img
//                 src={book.image}
//                 alt={book.title}
//                 className="w-full h-48 object-cover rounded-t-xl"
//               />
//               <div className="p-4 flex flex-col flex-grow justify-between">
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
//                     {book.title}
//                   </h2>
//                   <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//                     by {book.author}
//                   </p>
//                 </div>
//                 <div className="mt-auto flex justify-between items-center">
//                   <span className="text-green-600 font-bold dark:text-green-400">
//                     ₹{book.price}
//                   </span>
//                   <button
//                     onClick={() => addToCart(book)}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md text-sm"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center gap-2 mt-8">
//           {[...Array(totalPages)].map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentPage(idx + 1)}
//               className={`px-3 py-1 rounded-md ${
//                 currentPage === idx + 1
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
//               }`}
//             >
//               {idx + 1}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 🖥 Desktop Cart */}
//       <div
//         className="hidden md:block w-1/4 h-screen bg-white dark:bg-gray-800 border-l dark:border-gray-700 shadow-lg p-6"
//         style={{
//           overflowY: "auto",
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//         }}
//       >
//         <style>{`div::-webkit-scrollbar { display: none; }`}</style>

//         <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
//           Cart 🛍️
//           <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-blue-600 rounded-full">
//             {cartItems.length}
//           </span>
//         </h2>

//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
//             Your cart is empty.
//           </p>
//         ) : (
//           <>
//             <ul className="space-y-3 mt-4">
//               {cartItems.map((item) => (
//                 <li
//                   key={item.id}
//                   className="bg-gray-100 dark:bg-gray-700 rounded-md p-3 flex justify-between items-center"
//                 >
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-800 dark:text-white">
//                       {item.title}
//                     </h3>
//                     <span className="text-sm text-green-600 dark:text-green-400">
//                       ₹{item.price}
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 hover:text-red-700 text-xs"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-6 border-t pt-4">
//               <div className="flex justify-between text-lg font-semibold text-gray-800 dark:text-white">
//                 <span>Total:</span>
//                 <span>₹{getTotal()}</span>
//               </div>
//               <button
//                 onClick={handleCheckout}
//                 className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
//               >
//                 Checkout
//               </button>
//               <button
//                 onClick={clearCart}
//                 className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md"
//               >
//                 Clear Cart
//               </button>
//             </div>
//           </>
//         )}
//       </div>

//       {/* 📱 Mobile Cart Drawer */}
// {cartOpen && (
//   <div
//     className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-40"
//     onClick={() => setCartOpen(false)}
//   >
//     <div
//       className="absolute right-0 top-0 w-3/4 h-full bg-white dark:bg-gray-800 p-6 overflow-y-auto"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold text-gray-800 dark:text-white">
//           Your Cart 🛍️
//           <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-blue-600 rounded-full">
//             {cartItems.length}
//           </span>
//         </h2>
//         <button
//           onClick={() => setCartOpen(false)}
//           className="text-gray-500 hover:text-red-500 text-2xl font-bold"
//         >
//           ×
//         </button>
//       </div>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-500 dark:text-gray-400">
//           Your cart is empty.
//         </p>
//       ) : (
//         <>
//           <ul className="space-y-3">
//             {cartItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="bg-gray-100 dark:bg-gray-700 rounded-md p-3 flex justify-between items-center"
//               >
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-800 dark:text-white">
//                     {item.title}
//                   </h3>
//                   <span className="text-sm text-green-600 dark:text-green-400">
//                     ₹{item.price}
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:text-red-700 text-xs"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-6 border-t pt-4">
//             <div className="flex justify-between text-lg font-semibold text-gray-800 dark:text-white">
//               <span>Total:</span>
//               <span>₹{getTotal()}</span>
//             </div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
//             >
//               Checkout
//             </button>
//             <button
//               onClick={clearCart}
//               className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   </div>
// )}
//     </div>
//   );
// };

// export default Shop;

//------------------------------------------------------------------

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Dummy data with category
const dummyBooks = [
  {
    id: 1,
    title: "JavaScript Essentials",
    author: "John Doe",
    price: 499,
    image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    category: "JavaScript",
  },
  {
    id: 2,
    title: "Mastering React",
    author: "Jane Smith",
    price: 599,
    image: "https://covers.openlibrary.org/b/id/10516713-L.jpg",
    category: "React",
  },
  {
    id: 3,
    title: "Data Structures in JS",
    author: "Alex Grey",
    price: 699,
    image: "https://covers.openlibrary.org/b/id/11032765-L.jpg",
    category: "Data",
  },
  {
    id: 4,
    title: "Node.js Deep Dive",
    author: "Kevin Hart",
    price: 649,
    image: "https://covers.openlibrary.org/b/id/10475754-L.jpg",
    category: "Node",
  },
  {
    id: 5,
    title: "Python for Beginners",
    author: "Emily Carter",
    price: 549,
    image: "https://covers.openlibrary.org/b/id/11109372-L.jpg",
    category: "Python",
  },
  {
    id: 6,
    title: "Machine Learning 101",
    author: "Michael Lane",
    price: 799,
    image: "https://covers.openlibrary.org/b/id/10487535-L.jpg",
    category: "ML",
  },
  {
    id: 7,
    title: "Intro to Databases",
    author: "Rachel Green",
    price: 450,
    image: "https://covers.openlibrary.org/b/id/10909258-L.jpg",
    category: "Database",
  },
  {
    id: 8,
    title: "Frontend UI/UX Design",
    author: "Samuel Bright",
    price: 620,
    image: "https://covers.openlibrary.org/b/id/10327604-L.jpg",
    category: "Design",
  },
  {
    id: 9,
    title: "Learning MongoDB",
    author: "Laura Dean",
    price: 575,
    image: "https://covers.openlibrary.org/b/id/10506465-L.jpg",
    category: "Database",
  },
  {
    id: 10,
    title: "The Git Guide",
    author: "Chris Evans",
    price: 399,
    image: "https://covers.openlibrary.org/b/id/10934995-L.jpg",
    category: "Git",
  },
  {
    id: 11,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 899,
    image: "https://covers.openlibrary.org/b/id/8097440-L.jpg",
    category: "Clean Code",
  },
  {
    id: 12,
    title: "System Design Basics",
    author: "Ankita Rao",
    price: 720,
    image: "https://covers.openlibrary.org/b/id/11001549-L.jpg",
    category: "System Design",
  },
];

const categories = ["All", ...new Set(dummyBooks.map((book) => book.category))];

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const booksPerPage = 6;

  useEffect(() => {
    setBooks(dummyBooks);
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    if (cartOpen) {
      setIsClosing(false);
      setTimeout(() => setHasMounted(true), 0); // open instantly
    } else {
      setTimeout(() => setHasMounted(false), 400); // close after 400ms
    }
  }, [cartOpen]);

  const closeCart = () => {
    setIsClosing(true);
    setTimeout(() => {
      setCartOpen(false);
      setIsClosing(false);
    }, 400); // match this with transition duration
  };

  const addToCart = (book) => {
    if (cartItems.find((item) => item.id === book.id)) {
      toast.error("Book already in cart!");
    } else {
      setCartItems([...cartItems, book]);
      toast.success(`Added "${book.title}" to cart!`);
    }
  };

  const removeFromCart = (id) => {
    const removedItem = cartItems.find((item) => item.id === id);
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.success(`Removed "${removedItem?.title}" from cart`);
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info("Cart cleared");
  };

  const getTotal = () => cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return toast.error("Your cart is empty!");
    }

    const totalAmount = getTotal() * 100;

    const options = {
      key: "rzp_test_YOUR_KEY_HERE", // Replace with your Razorpay key
      amount: totalAmount,
      currency: "INR",
      name: "EduAll Bookstore",
      description: "Book Purchase",
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        toast.success("Payment Successful!");
        console.log("Razorpay payment ID:", response.razorpay_payment_id);
        clearCart();
      },
      prefill: {
        name: "Nikhil",
        email: "nikhil@example.com",
        contact: "0123456789",
      },
      theme: {
        color: "#2563eb",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  // Filters + Search + Sort
  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((book) =>
      selectedCategory === "All" ? true : book.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  const indexOfLast = currentPage * booksPerPage;
  const indexOfFirst = indexOfLast - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortOrder]); // To work properly for search and filter

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* 📱 Mobile Cart Button */}
      <div className="md:hidden fixed bottom-16 right-6 z-30">
        <button
          onClick={() => setCartOpen(true)}
          className="relative bg-blue-600 p-3 rounded-full shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="white"
            strokeWidth={2}
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
      <div className="w-full md:w-3/4 px-6 md:px-12 py-6">
        <h1 className="md:text-2xl lg:text-2xl text-xl font-bold mb-6 text-gray-800 dark:text-white">
          🛒 EduAll Bookstore
        </h1>

        {/* 🔍 Search, Filter, Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center md:gap-4 lg:gap-4 gap-1 mb-6">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:px-4 md:py-2 lg:px-4 lg:py-2 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white w-full md:text-sm lg:text-sm text-xs"
          />
          <div className="flex items-center justify-center gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="md:px-3 md:py-2 lg:px-3 lg:py-2 px-1 py-1 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white md:text-sm lg:text-sm text-xs"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="md:px-3 md:py-2 lg:px-3 lg:py-2 px-1 py-1 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white md:text-sm lg:text-sm text-xs"
            >
              <option value="">Sort</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* 📚 Book Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {currentBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col h-full"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {book.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    by {book.author}
                  </p>
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-green-600 font-bold dark:text-green-400">
                    ₹{book.price}
                  </span>
                  <button
                    onClick={() => addToCart(book)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 📑 Pagination */}
        <div className="flex justify-center mt-8">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* 🛒 Cart Panel */}
      <div className="hidden md:block md:w-1/4 bg-white dark:bg-gray-800 p-6 shadow-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Cart 🛍️ ({cartItems.length})
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            Your cart is empty.
          </p>
        ) : (
          <>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="bg-gray-100 dark:bg-gray-700 rounded-md p-3 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm text-green-600 dark:text-green-400">
                      ₹{item.price}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-xs"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between font-semibold text-gray-800 dark:text-white">
                <span>Total:</span>
                <span>₹{getTotal()}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
              >
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile Cart Drawer */}
      {/* {cartOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="absolute right-0 top-0 w-3/4 h-full bg-white dark:bg-gray-800 p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                Your Cart 🛍️
                <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-blue-600 rounded-full">
                  {cartItems.length}
                </span>
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="text-gray-500 hover:text-red-500 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">
                Your cart is empty.
              </p>
            ) : (
              <>
                <ul className="space-y-3">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="bg-gray-100 dark:bg-gray-700 rounded-md p-3 flex justify-between items-center"
                    >
                      <div>
                        <h3 className="text-sm font-medium text-gray-800 dark:text-white">
                          {item.title}
                        </h3>
                        <span className="text-sm text-green-600 dark:text-green-400">
                          ₹{item.price}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-xs"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold text-gray-800 dark:text-white">
                    <span>Total:</span>
                    <span>₹{getTotal()}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
                  >
                    Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )} */}

      {cartOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeCart}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white dark:bg-gray-800 p-6 shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
              isClosing
                ? "translate-x-full"
                : hasMounted
                ? "translate-x-0"
                : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                Your Cart 🛍️
                <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-blue-600 rounded-full">
                  {cartItems.length}
                </span>
              </h2>
              <button
                onClick={closeCart}
                className="text-gray-500 hover:text-red-500 text-3xl font-semibold"
              >
                ×
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">
                Your cart is empty.
              </p>
            ) : (
              <>
                <ul className="space-y-3">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="bg-gray-100 dark:bg-gray-700 rounded-md p-3 flex justify-between items-center"
                    >
                      <div>
                        <h3 className="text-sm font-medium text-gray-800 dark:text-white">
                          {item.title}
                        </h3>
                        <span className="text-sm text-green-600 dark:text-green-400">
                          ₹{item.price}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-xs"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold text-gray-800 dark:text-white">
                    <span>Total:</span>
                    <span>₹{getTotal()}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
                  >
                    Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
