import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
export const Text = styled.div``;
export const SignInLink = styled(Link)`
  width: 115px;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 1.7rem;
  color: var(--color-secondary);
  background-color: var(--color-primary);
  text-decoration: none;
  border-radius: 0.7rem;
`;

export const Header = styled.h1`
  width: 100%;
  text-align: center;
  letter-spacing: 0.05rem;
  word-spacing: 0.2rem;
  margin-bottom: 3%;
  margin-top: max(4%, 1.875rem);
`;

export const BookListContainer = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BookList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
