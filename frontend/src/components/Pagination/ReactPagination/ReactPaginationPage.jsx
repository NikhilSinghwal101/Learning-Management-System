import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../Pagination.css';

const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

const ReactPaginationPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const displayedItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <div>
            <ul>
                {displayedItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={Math.ceil(items.length / itemsPerPage)}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
                previousClassName={"pagination-button"}
                nextClassName={"pagination-button"}
                pageClassName={"pagination-page"}
                disabledClassName={"disabled"}
            />
        </div>
    );
};

export default ReactPaginationPage;