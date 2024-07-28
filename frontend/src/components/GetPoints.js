import React, { useState } from 'react';

const GetPoints = () => {
    const [receiptId, setReceiptId] = useState('');
    const [points, setPoints] = useState(null);

    const handleChange = (e) => {
        setReceiptId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/receipts/${receiptId}/points`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }

            const data = await res.json();
            setPoints(data.points);
        } catch (error) {
            console.error('Error fetching points:', error);
            setPoints(null);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen pt-20">
            <div className="bg-white-100 p-10 rounded-lg max-w-xl w-full mx-4 shadow-xl">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Get Receipt Points</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block mb-2 text-lg text-gray-700">Receipt ID:</label>
                        <input
                            type="text"
                            value={receiptId}
                            onChange={handleChange}
                            className="w-full p-4 rounded-lg text-gray-800 text-lg border border-gray-300"
                            style={{ width: '500px' }} // Added inline style for width
                            placeholder="Enter Receipt ID"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white-100 py-3 px-6 rounded-lg text-lg w-full font-semibold transition duration-300"
                    >
                        Get Points
                    </button>
                </form>
                {points !== null && (
                    <div className="mt-6 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Points: {points}</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetPoints;
