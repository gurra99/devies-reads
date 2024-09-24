import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  SignInContainer,
  Text,
  SignInLink,
  BookList,
  Header,
} from "./my-books.styles";
import DataContext from "../../context/data-context";
import { IBook } from "../../model/book";
import BookItem from "../../components/fragments/book-item/book-item";
import { LoadingSpinner } from "../../components/fragments/loading-spinner/loading-spinner";
import { ErrorMessage } from "../../components/fragments/error-message/error-message";

const MyBooks = () => {
  const { userId } = useContext(DataContext);
  const [books] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    if (userId) {
      fetch(`https://devies-reads-be.onrender.com/users/${userId}`)
        .then((resp) => {
          if (!resp.ok) {
            throw Error("Something went wrong!");
          }
          return resp.json();
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setIsLoading(false);
  }, []);

  return (
    <Container>
      {!isLoading ? (
        <>
          {userId ? (
            <BookList>
              <Header className="primary-heading">My Books</Header>
              {books?.map((book: IBook, index) => {
                return <BookItem key={index} book={book} />;
              })}
            </BookList>
          ) : (
            <SignInContainer>
              <Text>You must sign in to view your own books.</Text>
              <SignInLink to={"/sign-in"}>Sign In</SignInLink>
            </SignInContainer>
          )}
        </>
      ) : (
        <LoadingSpinner />
      )}
      {!isLoading && error && <ErrorMessage text={error} />}
    </Container>
  );
};

export default MyBooks;
