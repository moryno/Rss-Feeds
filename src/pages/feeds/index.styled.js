import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";

export const StyledFeedContainer = styled.main`
  width: 100vw;
  height: 100vh;
`;
export const StyledFeedsWrapper = styled.main`
  width: 70%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const StyledFeedTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 20px;
`;

export const StyledSearchBar = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  input {
    width: 100%;
    padding: 14px 20px 14px 30px;
    border: none;
    outline: none;
  }
  position: relative;
`;

export const StyledSearchIcon = styled(MdOutlineSearch)`
  position: absolute;
  cursor: pointer;
  font-size: 30px;
  top: 7px;
  left: 0;
`;
export const StyledFeedsList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledFeedCard = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;
`;
export const StyledFeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h2 {
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.2em;
    font-weight: 700;
    cursor: pointer;
  }
  p {
    font-family: "Varela Round", sans-serif;
    font-size: 14px;
    line-height: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const StyledFeedDate = styled.span`
  font-size: 11px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  margin: 0 auto;
`;

export const PageButton = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  background-color: #fff;
  color: #0077b6;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: #f1f1f1;
  }

  &:active {
    background-color: #00465a;
  }
`;
