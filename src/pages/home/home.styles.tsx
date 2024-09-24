import styled from "styled-components";
import { dimensions } from "../../utilities/dimensions";

export const Container = styled.div`
  font-family: var(--ff-primary);
  background-color: var(--color-light-grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Header = styled.h1`
  width: 100%;
  text-align: center;
  letter-spacing: 0.05rem;
  word-spacing: 0.2rem;
  margin-bottom: 3%;
  margin-top: max(3%, 1.875rem);
`;

export const BookListContainer = styled.div`
  max-width: 705px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SortDropDownContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (min-width: ${dimensions.mediumDevices}) {
    display: flex;
    justify-content: end;
  }
`;

export const BookList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
