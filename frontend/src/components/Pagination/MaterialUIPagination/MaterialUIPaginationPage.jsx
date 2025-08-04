import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import BlogData from '../../../../public/blogdata.json';
import '../Pagination.css'; 

// const items: string[] = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

const MaterialUIPaginationPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const displayedItems = BlogData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className='flex items-center justify-center flex-col gap-4 mt-8'>
            <ul className='flex gap-4'>
                {displayedItems.map(item => (
                    <img src={item.coverImg} alt="" key={item.id}/>
                ))}
            </ul>
            <Pagination
                count={Math.ceil(BlogData.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                className='pagination'
            />
        </div>
    );
};

export default MaterialUIPaginationPage;