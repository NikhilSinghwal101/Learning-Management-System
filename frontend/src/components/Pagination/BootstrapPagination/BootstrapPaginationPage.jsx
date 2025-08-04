import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

const BootstrapPaginationPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(items.length / itemsPerPage);

    return (
        <div>
            <ul>
                {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <Pagination>
                {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
};

export default BootstrapPaginationPage;