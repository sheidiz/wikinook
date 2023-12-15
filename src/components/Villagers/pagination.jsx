import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pages, setCurrentPage }) {
  return (
    <ReactPaginate 
      className="pagination md:ms-48 my-4 flex justify-center gap-1 md:gap-2"
      previousLabel="Prev"
      nextLabel="Next"
      previousClassName={`p-2 bg-lightgreen text-white text-sm rounded-md ${pages===1 && '!bg-gray-300'}`}
      nextClassName={`p-2 bg-lightgreen text-white text-sm rounded-md ${pages===1 && '!bg-gray-300'}`}
      pageClassName="p-2 bg-lightgreen opacity-700 text-white text-sm rounded-md"
      pageLinkClassName=""
      activeClassName="active !bg-red-300"
      onPageChange={(data) =>{
        setCurrentPage(data.selected);
      }}
      pageCount={pages}
    />
  )
}
