import React from "react";
import { useGlobalContext } from "../context/context";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const BtnContPg = () => {
  const { numOfPages, page, changePage } = useGlobalContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePage(newPage);
  };

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
  };

  return (
    <div className="h-24 mt-8 lg:mt-0 flex items-center justify-end flex-wrap gap-4 lg:gap-8">
      <button
        className="w-24 h-10 bg-white border-transparent rounded-md text-[#75C9B7] capitalize flex items-center justify-center gap-2 cursor-pointer transition duration-300 hover:text-yellow-500 hover:bg-yellow-100 "
        onClick={prevPage}
      >
        <HiChevronDoubleLeft />
        Prev
      </button>

      <div className="bg-[#abd699] rounded-md">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              key={pageNumber}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        className="w-24 h-10 bg-white border-transparent rounded-md text-[#75C9B7]  capitalize flex items-center justify-center gap-2 cursor-pointer transition duration-300 hover:text-yellow-500 hover:bg-yellow-100 "
        onClick={nextPage}
      >
        Next
        <HiChevronDoubleRight />
      </button>
    </div>
  );
};

export default BtnContPg;
