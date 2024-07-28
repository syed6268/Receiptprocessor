// import React, { useState, useEffect } from 'react';

// const ReceiptForm = ({ setView }) => {
//     const [receipt, setReceipt] = useState({
//         retailer: '',
//         purchaseDate: '',
//         purchaseTime: '',
//         items: [{ shortDescription: '', price: '' }],
//         total: ''
//     });
//     const [response, setResponse] = useState(null);

//     useEffect(() => {
//         const total = receipt.items.reduce((acc, item) => acc + parseFloat(item.price || 0), 0);
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             total: total.toFixed(2)
//         }));
//     }, [receipt.items]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             [name]: value
//         }));
//     };

//     const handleItemChange = (index, e) => {
//         const { name, value } = e.target;
//         const newItems = receipt.items.map((item, i) => {
//             if (i === index) {
//                 return { ...item, [name]: value };
//             }
//             return item;
//         });
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             items: newItems
//         }));
//     };

//     const addItem = () => {
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             items: [...prevReceipt.items, { shortDescription: '', price: '' }]
//         }));
//     };

//     const removeItem = (index) => {
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             items: prevReceipt.items.filter((_, i) => i !== index)
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await fetch('/receipts/process', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(receipt),
//             });

//             if (!res.ok) {
//                 throw new Error(`Error: ${res.status}`);
//             }

//             const data = await res.json();
//             setResponse(data);
//         } catch (error) {
//             console.error('Error processing receipt:', error);
//         }
//     };

//     return (
//         <div className="bg-blue-800 bg-opacity-90 text-white p-10 rounded-lg max-w-2xl mx-auto font-sans shadow-lg mt-8">
//             <h1 className="text-3xl font-bold mb-6 text-center">Receipt Processor</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-lg">Retailer:</label>
//                     <input
//                         type="text"
//                         name="retailer"
//                         value={receipt.retailer}
//                         onChange={handleChange}
//                         className="w-full p-4 rounded-lg text-black text-lg"
//                         placeholder="Enter Retailer Name"
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-lg">Purchase Date:</label>
//                     <input
//                         type="date"
//                         name="purchaseDate"
//                         value={receipt.purchaseDate}
//                         onChange={handleChange}
//                         className="w-full p-4 rounded-lg text-black text-lg"
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block mb-2 text-lg">Purchase Time:</label>
//                     <input
//                         type="time"
//                         name="purchaseTime"
//                         value={receipt.purchaseTime}
//                         onChange={handleChange}
//                         className="w-full p-4 rounded-lg text-black text-lg"
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <button
//                         type="button"
//                         onClick={addItem}
//                         className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
//                     >
//                         Add Item
//                     </button>
//                 </div>
//                 {receipt.items.map((item, index) => (
//                     <div key={index} className="flex items-center mb-4 space-x-4">
//                         <label className="whitespace-nowrap text-lg">Item {index + 1}:</label>
//                         <input
//                             type="text"
//                             name="shortDescription"
//                             value={item.shortDescription}
//                             onChange={(e) => handleItemChange(index, e)}
//                             className="flex-1 p-4 rounded-lg text-black text-lg"
//                             placeholder="Description"
//                         />
//                         <label className="whitespace-nowrap text-lg">Price:</label>
//                         <input
//                             type="number"
//                             step="0.01"
//                             name="price"
//                             value={item.price}
//                             onChange={(e) => handleItemChange(index, e)}
//                             className="flex-1 p-4 rounded-lg text-black text-lg"
//                             placeholder="Price"
//                         />
//                         <button
//                             type="button"
//                             onClick={() => removeItem(index)}
//                             className="bg-red-500 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
//                         >
//                             Remove
//                         </button>
//                     </div>
//                 ))}
//                 <div className="mb-6">
//                     <label className="block mb-2 text-lg">Total:</label>
//                     <input
//                         type="text"
//                         name="total"
//                         value={receipt.total}
//                         readOnly
//                         className="w-full p-4 rounded-lg text-black bg-gray-300 cursor-not-allowed text-lg"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg w-full font-semibold transition duration-300"
//                 >
//                     Submit Receipt
//                 </button>
//             </form>
//             {response && (
//                 <div className="mt-6 text-center">
//                     <h2 className="text-2xl font-semibold">Receipt ID: {response.id}</h2>
//                     <button
//                         type="button"
//                         className="bg-yellow-500 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg mt-4 text-lg font-semibold transition duration-300"
//                         onClick={() => setView('getPoints')}
//                     >
//                         Get Receipt Points
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ReceiptForm;
// import React, { useState, useEffect } from 'react';

// const ReceiptForm = ({ setView }) => {
//     const [receipt, setReceipt] = useState({
//         retailer: '',
//         purchaseDate: '',
//         purchaseTime: '',
//         items: [{ shortDescription: '', price: '' }],
//         total: ''
//     });
//     const [response, setResponse] = useState(null);

//     useEffect(() => {
//         const total = receipt.items.reduce((acc, item) => acc + parseFloat(item.price || 0), 0);
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             total: total.toFixed(2)
//         }));
//     }, [receipt.items]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             [name]: value
//         }));
//     };

//     const handleItemChange = (index, e) => {
//         const { name, value } = e.target;
//         const newItems = receipt.items.map((item, i) => {
//             if (i === index) {
//                 return { ...item, [name]: value };
//             }
//             return item;
//         });
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             items: newItems
//         }));
//     };

//     const addItem = () => {
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             items: [...prevReceipt.items, { shortDescription: '', price: '' }]
//         }));
//     };

//     const removeItem = (index) => {
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             items: prevReceipt.items.filter((_, i) => i !== index)
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await fetch('/receipts/process', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(receipt),
//             });

//             if (!res.ok) {
//                 throw new Error(`Error: ${res.status}`);
//             }

//             const data = await res.json();
//             setResponse(data);
//         } catch (error) {
//             console.error('Error processing receipt:', error);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
//             <div className="bg-white bg-opacity-90 p-10 rounded-lg max-w-2xl w-full mx-4 shadow-xl">
//                 <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Receipt Processor</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-6">
//                         <label className="block mb-2 text-lg text-gray-700">Retailer:</label>
//                         <input
//                             type="text"
//                             name="retailer"
//                             value={receipt.retailer}
//                             onChange={handleChange}
//                             className="w-full p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
//                             placeholder="Enter Retailer Name"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block mb-2 text-lg text-gray-700">Purchase Date:</label>
//                         <input
//                             type="date"
//                             name="purchaseDate"
//                             value={receipt.purchaseDate}
//                             onChange={handleChange}
//                             className="w-full p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block mb-2 text-lg text-gray-700">Purchase Time:</label>
//                         <input
//                             type="time"
//                             name="purchaseTime"
//                             value={receipt.purchaseTime}
//                             onChange={handleChange}
//                             className="w-full p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <button
//                             type="button"
//                             onClick={addItem}
//                             className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
//                         >
//                             Add Item
//                         </button>
//                     </div>
//                     {receipt.items.map((item, index) => (
//                         <div key={index} className="flex items-center mb-4 space-x-4">
//                             <label className="whitespace-nowrap text-lg text-gray-700">Item {index + 1}:</label>
//                             <input
//                                 type="text"
//                                 name="shortDescription"
//                                 value={item.shortDescription}
//                                 onChange={(e) => handleItemChange(index, e)}
//                                 className="flex-1 p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
//                                 placeholder="Description"
//                             />
//                             <label className="whitespace-nowrap text-lg text-gray-700">Price:</label>
//                             <input
//                                 type="number"
//                                 step="0.01"
//                                 name="price"
//                                 value={item.price}
//                                 onChange={(e) => handleItemChange(index, e)}
//                                 className="flex-1 p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
//                                 placeholder="Price"
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => removeItem(index)}
//                                 className="bg-red-500 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                     <div className="mb-6">
//                         <label className="block mb-2 text-lg text-gray-700">Total:</label>
//                         <input
//                             type="text"
//                             name="total"
//                             value={receipt.total}
//                             readOnly
//                             className="w-full p-4 rounded-lg text-gray-800 bg-gray-300 cursor-not-allowed text-lg border border-gray-300"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg w-full font-semibold transition duration-300"
//                     >
//                         Submit Receipt
//                     </button>
//                 </form>
//                 {response && (
//                     <div className="mt-6 text-center">
//                         <h2 className="text-2xl font-semibold text-gray-800">Receipt ID: {response.id}</h2>
//                         <button
//                             type="button"
//                             className="bg-yellow-500 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg mt-4 text-lg font-semibold transition duration-300"
//                             onClick={() => setView('getPoints')}
//                         >
//                             Get Receipt Points
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ReceiptForm;


// import React, { useState, useEffect } from 'react';

// const ReceiptForm = ({ setView }) => {
//     const [receipt, setReceipt] = useState({
//         retailer: '',
//         purchaseDate: '',
//         purchaseTime: '',
//         items: [{ shortDescription: '', price: '' }],
//         total: ''
//     });
//     const [response, setResponse] = useState(null);

//     useEffect(() => {
//         const total = receipt.items.reduce((acc, item) => acc + parseFloat(item.price || 0), 0);
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             total: total.toFixed(2)
//         }));
//     }, [receipt.items]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             [name]: value
//         }));
//     };

//     const handleItemChange = (index, e) => {
//         const { name, value } = e.target;
//         const newItems = receipt.items.map((item, i) => {
//             if (i === index) {
//                 return { ...item, [name]: value };
//             }
//             return item;
//         });
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             items: newItems
//         }));
//     };

//     const addItem = () => {
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             items: [...prevReceipt.items, { shortDescription: '', price: '' }]
//         }));
//     };

//     const removeItem = (index) => {
//         setReceipt((prevReceipt) => ({
//             ...prevReceipt,
//             items: prevReceipt.items.filter((_, i) => i !== index)
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await fetch('/receipts/process', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(receipt),
//             });

//             if (!res.ok) {
//                 throw new Error(`Error: ${res.status}`);
//             }

//             const data = await res.json();
//             setResponse(data);
//         } catch (error) {
//             console.error('Error processing receipt:', error);
//         }
//     };
//     // bg-gradient-to-r from-blue-400 to-purple-500

//     return (
//         <div className="flex items-center justify-center min-h-screen  pt-20 ">
//             <div className="bg-white  p-10 rounded-lg max-w-4xl w-full mx-4  shadow-2xl">
//                 <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Receipt Processor</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-6">
//                         <label className="block mb-2 text-lg text-gray-700">Retailer:</label>
//                         <input
//                             type="text"
//                             name="retailer"
//                             value={receipt.retailer}
//                             onChange={handleChange}
//                             className="w-full p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
//                             placeholder="Enter Retailer Name"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block mb-2 text-lg text-gray-700">Purchase Date:</label>
//                         <input
//                             type="date"
//                             name="purchaseDate"
//                             value={receipt.purchaseDate}
//                             onChange={handleChange}
//                             className="w-full p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block mb-2 text-lg text-gray-700">Purchase Time:</label>
//                         <input
//                             type="time"
//                             name="purchaseTime"
//                             value={receipt.purchaseTime}
//                             onChange={handleChange}
//                             className="w-full p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <button
//                             type="button"
//                             onClick={addItem}
//                             className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
//                         >
//                             Add Item
//                         </button>
//                     </div>
//                     {receipt.items.map((item, index) => (
//                         <div key={index} className="flex items-center mb-4 space-x-4">
//                             <label className="whitespace-nowrap text-lg text-gray-700">Item {index + 1}:</label>
//                             <input
//                                 type="text"
//                                 name="shortDescription"
//                                 value={item.shortDescription}
//                                 onChange={(e) => handleItemChange(index, e)}
//                                 className="flex-1 p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
//                                 placeholder="Description"
//                             />
//                             <label className="whitespace-nowrap text-lg text-gray-700">Price:</label>
//                             <input
//                                 type="number"
//                                 step="0.01"
//                                 name="price"
//                                 value={item.price}
//                                 onChange={(e) => handleItemChange(index, e)}
//                                 className="flex-1 p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
//                                 placeholder="Price"
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => removeItem(index)}
//                                 className="bg-red-500 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                     <div className="mb-6">
//                         <label className="block mb-2 text-lg text-gray-700">Total:</label>
//                         <input
//                             type="text"
//                             name="total"
//                             value={receipt.total}
//                             readOnly
//                             className="w-full p-4 rounded-lg text-gray-800 bg-gray-300 cursor-not-allowed text-lg border border-gray-300"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg w-full font-semibold transition duration-300"
//                     >
//                         Submit Receipt
//                     </button>
//                 </form>
//                 {response && (
//                     <div className="mt-6 text-center">
//                         <h2 className="text-2xl font-semibold text-gray-800">Receipt ID: {response.id}</h2>
//                         <button
//                             type="button"
//                             className="bg-yellow-500 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg mt-4 text-lg font-semibold transition duration-300"
//                             onClick={() => setView('getPoints')}
//                         >
//                             Get Receipt Points
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ReceiptForm;
import React, { useState, useEffect } from 'react';

const ReceiptForm = ({ setView }) => {
    const [receipt, setReceipt] = useState({
        retailer: '',
        purchaseDate: '',
        purchaseTime: '',
        items: [{ shortDescription: '', price: '' }],
        total: ''
    });
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const total = receipt.items.reduce((acc, item) => acc + parseFloat(item.price || 0), 0);
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            total: total.toFixed(2)
        }));
    }, [receipt.items]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            [name]: value
        }));
    };

    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const newItems = receipt.items.map((item, i) => {
            if (i === index) {
                return { ...item, [name]: value };
            }
            return item;
        });
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            items: newItems
        }));
    };

    const addItem = () => {
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            items: [...prevReceipt.items, { shortDescription: '', price: '' }]
        }));
    };

    const removeItem = (index) => {
        setReceipt((prevReceipt) => ({
            ...prevReceipt,
            items: prevReceipt.items.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/receipts/process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(receipt),
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }

            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error('Error processing receipt:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen pt-20">
            <div className="bg-white-100 p-10 rounded-lg max-w-4xl w-full mx-4 shadow-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Receipt Processor</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block mb-2 text-lg text-gray-700">Retailer:</label>
                        <input
                            type="text"
                            name="retailer"
                            value={receipt.retailer}
                            onChange={handleChange}
                            className="w-full p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
                            placeholder="Enter Retailer Name"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-lg text-gray-700">Purchase Date:</label>
                        <input
                            type="date"
                            name="purchaseDate"
                            value={receipt.purchaseDate}
                            onChange={handleChange}
                            className="w-full p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-lg text-gray-700">Purchase Time:</label>
                        <input
                            type="time"
                            name="purchaseTime"
                            value={receipt.purchaseTime}
                            onChange={handleChange}
                            className="w-full p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <button
                            type="button"
                            onClick={addItem}
                            className="bg-green-500 hover:bg-green-700 text-white-100 py-3 px-6 rounded-lg font-semibold transition duration-300"
                        >
                            Add Item
                        </button>
                    </div>
                    {receipt.items.map((item, index) => (
                        <div key={index} className="flex items-center mb-4 space-x-4">
                            <label className="whitespace-nowrap text-lg text-gray-700">Item {index + 1}:</label>
                            <input
                                type="text"
                                name="shortDescription"
                                value={item.shortDescription}
                                onChange={(e) => handleItemChange(index, e)}
                                className="flex-1 p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
                                placeholder="Description"
                            />
                            <label className="whitespace-nowrap text-lg text-gray-700">Price:</label>
                            <input
                                type="text"
                                // step="0.01"
                                name="price"
                                value={item.price}
                                onChange={(e) => handleItemChange(index, e)}
                                className="flex-1 p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
                                placeholder="Price"
                            />
                            <button
                                type="button"
                                onClick={() => removeItem(index)}
                                className="bg-red-500 hover:bg-red-700 text-white-100 py-3 px-6 rounded-lg font-semibold transition duration-300"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mb-6">
                        <label className="block mb-2 text-lg text-gray-700">Total:</label>
                        <input
                            type="text"
                            name="total"
                            value={receipt.total}
                            readOnly
                            className="w-full p-4 rounded-lg text-gray-800 bg-gray-300 cursor-not-allowed text-lg border border-gray-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white-100 py-3 px-6 rounded-lg text-lg w-full font-semibold transition duration-300"
                    >
                        Submit Receipt
                    </button>
                </form>
                {response && (
                    <div className="mt-6 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Receipt ID: {response.id}</h2>
                        <button
                            type="button"
                            className="bg-yellow-500 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg mt-4 text-lg font-semibold transition duration-300"
                            onClick={() => setView('getPoints')}
                        >
                            Get Receipt Points
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReceiptForm;
