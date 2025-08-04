import React, { useState } from 'react';
import '../Pagination.css';

const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`)

const CustomPaginationPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
     const itemsPerPage = 10
    const handlePageClick = (page) => {
        setCurrentPage(page);
    }
    const displayedItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    const pageCount = Math.ceil(items.length / itemsPerPage)
    return (
        <div>
            <ul>
                {displayedItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <div className="pagination">
                <button
                    onClick={() => handlePageClick(currentPage - 1)}
                    disabled={currentPage === 0}
                    className={`pagination-button ${currentPage === 0 ? 'disabled' : ''}`}>
                    Prev
                </button>
                {[...Array(pageCount)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageClick(index)}
                        className={`pagination-page ${currentPage === index ? 'active' : ''}`}>
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={currentPage >= pageCount - 1}
                    className={`pagination-button ${currentPage >= pageCount - 1 ? 'disabled' : ''}`}>
                    Next
                </button>
            </div>
        </div>
    );
} 
export default CustomPaginationPage; 
