import React, { useEffect, useState } from "react";
import {
  BookList,
  Container,
  Header,
  SortDropDownContainer,
  BookListContainer,
} from "./home.styles";
import { IBook } from "../../model/book";
import BookItem from "../../components/fragments/book-item/book-item";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { LoadingSpinner } from "../../components/fragments/loading-spinner/loading-spinner";
import { ErrorMessage } from "../../components/fragments/error-message/error-message";

const Home = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`https://devies-reads-be.onrender.com/books?sortBy=${sortBy}`)
      .then((resp) => {
        if (!resp.ok) {
          throw Error("Something went wrong!");
        }
        return resp.json();
      })
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  }, [sortBy]);

  const handleChangeSortBy = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  return (
    <Container>
      <Header className="primary-heading">Devies Books</Header>
      {!isLoading ? (
        <BookListContainer>
          <SortDropDownContainer>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Sort by
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={sortBy}
                onChange={handleChangeSortBy}
                label="Age"
              >
                <MenuItem value={"name"}>Name</MenuItem>
                <MenuItem value={"haveRead"}>Have Read</MenuItem>
                <MenuItem value={"currentlyReading"}>
                  Currently Reading
                </MenuItem>
                <MenuItem value={"wantToRead"}>Want To Read</MenuItem>
              </Select>
            </FormControl>
          </SortDropDownContainer>
          <BookList>
            {books?.map((book: IBook, index) => {
              return <BookItem key={index} book={book} />;
            })}
          </BookList>
        </BookListContainer>
      ) : (
        <LoadingSpinner />
      )}
      {!isLoading && error && <ErrorMessage text={error} />}
    </Container>
  );
};

export default Home;
