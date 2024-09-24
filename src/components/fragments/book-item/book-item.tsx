import React from "react";
import {
  Container,
  Image,
  InformationContainer,
  Text,
  ProductNameContainer,
  Title,
} from "./book-item.styles";
import { IBook } from "../../../model/book";

interface BookItemProps {
  book: IBook;
}

const BookItem = (props: BookItemProps) => {
  const { book } = props;

  return (
    <Container to={`book/${book.id}`}>
      <Image src={`${book.coverUrl}`} alt="product-poster" />
      <InformationContainer>
        <Title text-align={"left"}>{book?.name}</Title>
        <ProductNameContainer>
          <Text>Have read:</Text>
          <Text>{book?.haveRead}</Text>
        </ProductNameContainer>
        <ProductNameContainer>
          <Text>Reading:</Text>
          <Text>{book?.currentlyReading}</Text>
        </ProductNameContainer>
        <ProductNameContainer>
          <Text>Want to Read:</Text>
          <Text>{book?.wantToRead}</Text>
        </ProductNameContainer>
        <ProductNameContainer>
          <Text>Rating:</Text>
          <Text>{book?.averageRating.toFixed(1)}</Text>
        </ProductNameContainer>
      </InformationContainer>
    </Container>
  );
};

export default BookItem;
