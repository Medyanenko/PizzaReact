import React from "react";
import ReactPaginate from "react-paginate";
import s from "./Pagination.module.scss";

type PaginatorProps = {
  onChangePage: (page: number) => void;
}
const Pagination: React.FC<PaginatorProps> = ({onChangePage}) => {
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) =>onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
    />
  );
};

export default Pagination;
