import React, { useState } from 'react';
import Pagination from './Pagination';

const PaginationDemoPage = () => {
    const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Calculate current items based on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4 text-center">Pagination Example</h1>
            <ul className="flex items-center flex-col mb-4">
                {currentItems.map((item) => (
                    <li key={item} className="py-2 border-b w-full text-center">{item}</li>
                ))}
            </ul>
            <Pagination
                totalItems={items.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default PaginationDemoPage;
