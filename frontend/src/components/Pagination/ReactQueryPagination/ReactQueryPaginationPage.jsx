import React from 'react';
import { useQuery } from 'react-query';
import ReactPaginate from 'react-paginate';
import '../Pagination.css';

const fetchItems = async (page = 0) => {
    const res = await fetch(`https://api.example.com/items?page=${page}`);
    return res.json();
};

const ReactQueryPaginationPage = () => {
    const [currentPage, setCurrentPage] = React.useState(0);
    const { data, isLoading } = useQuery(['items', currentPage], () => fetchItems(currentPage));

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <ul>
                {data?.items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={data?.totalPages || 0}
                onPageChange={({ selected }) => setCurrentPage(selected)}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default ReactQueryPaginationPage;


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// https://api.example.com/items?page=1&limit=10

// src/api.ts
// import axios from 'axios';

// export const fetchItems = async (page: number, limit: number) => {
//     const response = await axios.get(`https://api.example.com/items`, {
//         params: { page, limit },
//     });
//     return response.data; // Assuming it returns { items: [...], totalPages: number }
// };


//////////////////////////////////////////////////////


// // src/components/Pagination.tsx

// import React from 'react';
// import ReactPaginate from 'react-paginate';

// interface PaginationProps {
//     pageCount: number;
//     onPageChange: (selectedPage: number) => void;
// }

// const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
//     return (
//         <ReactPaginate
//             previousLabel={"Previous"}
//             nextLabel={"Next"}
//             breakLabel={"..."}
//             pageCount={pageCount}
//             onPageChange={(data) => onPageChange(data.selected + 1)} // +1 for 1-based indexing
//             containerClassName={"pagination"}
//             activeClassName={"active"}
//         />
//     );
// };

// export default Pagination;



///////////////////////////////////////////////

// // src/App.tsx

// import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import { fetchItems } from './api';
// import Pagination from './components/Pagination';

// const App: React.FC = () => {
//     const [currentPage, setCurrentPage] = useState<number>(1);
//     const itemsPerPage = 10;

//     const { data, isLoading, isError } = useQuery(
//         ['items', currentPage],
//         () => fetchItems(currentPage, itemsPerPage),
//         {
//             keepPreviousData: true, // Keep old data while new data is loading
//         }
//     );

//     if (isLoading) return <div>Loading...</div>;
//     if (isError) return <div>Error fetching data</div>;

//     return (
//         <div>
//             <h1>Items</h1>
//             <ul>
//                 {data.items.map((item: { id: number; name: string }) => (
//                     <li key={item.id}>{item.name}</li>
//                 ))}
//             </ul>
//             <Pagination
//                 pageCount={data.totalPages}
//                 onPageChange={setCurrentPage}
//             />
//         </div>
//     );
// };

// export default App;



