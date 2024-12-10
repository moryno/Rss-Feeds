import { StyledSearchBar, StyledSearchIcon } from "../index.styled";

const SearchComponent = ({ onSearch }) => {
  return (
    <StyledSearchBar>
      <StyledSearchIcon />
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search feeds..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </StyledSearchBar>
  );
};

export default SearchComponent;
