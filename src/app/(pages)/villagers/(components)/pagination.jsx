import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pages, setCurrentPage }) {
  return (
    <ReactPaginate 
      className="pagination my-4 flex justify-center gap2 md:gap-4"
      previousLabel="Prev"
      nextLabel="Next"
      previousClassName="p-2 btn bg-lightgreen text-white"
      nextClassName="p-2 btn bg-lightgreen text-white"
      pageClassName="p-2 btn bg-lightgreen opacity-700 text-white"
      pageLinkClassName=""
      activeClassName="active !bg-red-300"
      onPageChange={(data) =>{
        setCurrentPage(data.selected);
      }}
      pageCount={pages}
    />
  )
}
