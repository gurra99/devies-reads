import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  DescriptionContainer,
  DescriptionName,
  DescriptionValue,
  Header,
  Container,
  MovieContainer,
  TextContainer,
  Image,
} from "./book.styles";
import {
  RowContainer,
  RowName,
  RowValue,
  ButtonContainer,
} from "../../App.styles";
import { IBook } from "../../model/book";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { LoadingSpinner } from "../../components/fragments/loading-spinner/loading-spinner";
import { ErrorMessage } from "../../components/fragments/error-message/error-message";
import DataContext from "../../context/data-context";

const Book = () => {
  const { userId, accessToken } = useContext(DataContext);
  const [book, setBook] = useState<IBook>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [bookStatus, setBookStatus] = useState<string>("");
  const [rating, setRating] = React.useState<number | null>(0);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    if (id) {
      fetch(`https://devies-reads-be.onrender.com/books/${id}`)
        .then((resp) => {
          if (!resp.ok) {
            throw Error("Something went wrong!");
          }
          return resp.json();
        })
        .then((data) => {
          setBook(data);
          setRating(data.averageRating);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
          console.log(error);
        });
    }
    setIsLoading(false);
  }, []);

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
        .then((data) => {
          const book = findBookById(data.shelf, id || "");
          if (book?.status) {
            setBookStatus(book.status);
          } else {
            setBookStatus("none");
            setIsLoading(false);
          }
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
          console.log(error);
        });
    }
    setIsLoading(false);
  }, []);

  const changeReadOption = (value: string) => {
    if (
      userId &&
      accessToken &&
      bookStatus == "none" &&
      value &&
      value != "none"
    ) {
      fetch(`https://devies-reads-be.onrender.com/users/${userId}/shelf`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookId: id,
          status: value,
        }),
      })
        .then((resp) => {
          if (!resp.ok) {
            throw Error("Something went wrong!");
          }
          return resp.json();
        })
        .then(() => {
          // Set new data
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      if (
        userId &&
        id &&
        accessToken &&
        bookStatus &&
        value &&
        value != "none"
      ) {
        fetch(`https://devies-reads-be.onrender.com/users/${userId}/shelf`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookId: id,
            status: value,
          }),
        })
          .then((resp) => {
            if (!resp.ok) {
              throw Error("Something went wrong!");
            }
            return resp.json();
          })
          .then(() => {
            // Set new data
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  const changedRating = (value: number) => {
    if (userId && accessToken && value) {
      fetch(`https://devies-reads-be.onrender.com/books/${value}/rate`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookId: id,
          rating: value,
        }),
      })
        .then((resp) => {
          if (!resp.ok) {
            throw Error("Something went wrong!");
          }
          return resp.json();
        })
        .then((data) => {
          setRating(data.averageRating);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChangedStatus = (event: SelectChangeEvent) => {
    setBookStatus(event.target.value);
    changeReadOption(event.target.value);
  };

  const handleChangedRating = (value: number) => {
    setRating(value);
    changedRating(value);
  };

  function findBookById(books: any, id: string) {
    for (const book of books) {
      if (book.bookId === id) {
        return book;
      }
    }
    return null;
  }

  return (
    <Container>
      {!isLoading && !error ? (
        <MovieContainer>
          <Image src={`${book?.coverUrl}` || ""} alt="movie" />
          <TextContainer>
            <Header className="secondary-heading">{book?.name}</Header>
            <RowContainer>
              <RowName>Genre:</RowName>
              <RowValue>{book?.genre}</RowValue>
            </RowContainer>
            <RowContainer>
              {accessToken && bookStatus && (
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                  <InputLabel id="simple-select-standard-label">
                    Read State
                  </InputLabel>
                  <Select
                    labelId="simple-select-standard-label"
                    id="simple-select-standard"
                    value={bookStatus || ""}
                    onChange={handleChangedStatus}
                    label="Status"
                  >
                    {bookStatus && bookStatus == "none" && (
                      <MenuItem value="none">
                        <em>None</em>
                      </MenuItem>
                    )}

                    <MenuItem value={"haveRead"}>Have Read</MenuItem>
                    <MenuItem value={"currentlyReading"}>
                      Currently Reading
                    </MenuItem>
                    <MenuItem value={"wantToRead"}>Want To Read</MenuItem>
                  </Select>
                </FormControl>
              )}
            </RowContainer>
            {accessToken && (
              <RowContainer>
                <Box sx={{ "& > legend": { mt: 2 } }}>
                  <Typography component="legend">Rating</Typography>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      handleChangedRating(newValue || 0);
                    }}
                  />
                </Box>
              </RowContainer>
            )}
            <DescriptionContainer>
              <DescriptionName>Description:</DescriptionName>
              <DescriptionValue>{book?.description}</DescriptionValue>
            </DescriptionContainer>
            <ButtonContainer></ButtonContainer>
          </TextContainer>
        </MovieContainer>
      ) : !error ? (
        <LoadingSpinner />
      ) : null}
      {error && <ErrorMessage text={"Could not find book."} />}
    </Container>
  );
};

export default Book;
