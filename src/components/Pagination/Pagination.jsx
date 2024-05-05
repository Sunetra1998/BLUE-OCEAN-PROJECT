import React from 'react';
import './Pagination.scss';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange, onItemsPerPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        onPageChange(page);
    };

    const handleItemsPerPageChange = (e) => {
        const value = parseInt(e.target.value, 10);
        onItemsPerPageChange(value);
    };

    return (
        <div className="pagination">
            <div className="items-per-page">
                <span>View users per page:</span>
                <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                </select>
            </div>
            <div className="page-navigation">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                <span>{currentPage} of {totalPages}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default Pagination;
