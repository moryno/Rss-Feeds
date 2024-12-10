import { PageButton, Pagination } from "../index.styled";

const PaginationComponent = ({ feeds, pageSize, onPageChange }) => {
  return (
    <Pagination>
      {Array.from(
        { length: Math.ceil(feeds.length / pageSize) },
        (_, index) => (
          <PageButton key={index + 1} onClick={() => onPageChange(index + 1)}>
            {index + 1}
          </PageButton>
        )
      )}
    </Pagination>
  );
};

export default PaginationComponent;
