import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../../api/api";
import Cards from "../Cards";

interface BookProps {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  author: string;
  timeTakenToRead: number;
  numberOfReads: string;
  status: string;
  complete: number;
  synopsis: string;
  whoIsItFor: string;
  aboutAuthor: string;
}

interface Props {
  librarybu?: boolean;
  finished?: boolean;
  readAgain?: boolean;
  checkComplete: number;
}

function CardsList(props: Props) {
  const [books, setBooks] = useState<BookProps[]>([]);

  const getBooks = async () => {
    const response = await api.get("http://localhost:3001/books");
    const data = response.data;
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  });

  let operCheck:
    | {
        0: number;
        31: number;
        100: number;
      }
    | {
        31: number;
      }
    | {
        100: number;
      };
  if (props.checkComplete === 0) {
    operCheck = { 0: 0, 31: 31, 100: 100 };
  } else if (props.checkComplete === 31) {
    operCheck = { 31: 31 };
  } else {
    operCheck = { 100: 100 };
  }

  let emptyBooks =
    books.filter((item) => item.complete === props.checkComplete).length ===
    0 ? (
      <Typography variant="h4" fontWeight={700}>
        No Books to Show
      </Typography>
    ) : null;

  return (
    <Box
      display={"flex"}
      width="90%"
      height="auto"
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      {emptyBooks}
      {books
        .filter((item) => item.complete in operCheck)
        .map((card, key) => {
          return (
            <Box width={"30%"} paddingTop={"25px"} key={key}>
              <Cards
                id={card.id}
                image={card.src}
                bookName={card.title}
                authorName={card.author}
                progress={true}
                librarybu={props.librarybu}
                finished={props.finished}
                readAgain={props.readAgain}
                progressValues={card.complete}
                key={key}
                read={card.numberOfReads}
                time={card.timeTakenToRead}
              ></Cards>
            </Box>
          );
        })}
    </Box>
  );
}

export default CardsList;
