import { render, screen } from "@testing-library/react";
import CardsList from ".";

it("CardsList Test", async () => {
  render(<CardsList checkComplete={0} librarybu={true} />);
  const cardsListElement = screen.getByText(/No Books to Show/i);
  expect(cardsListElement).toBeInTheDocument();
});

// const axios = require('axios')
// jest.mock("axios");

// test("CardsList Clikc Tets", async () => {
//     render(<CardsList checkComplete={31}/>)
//   const books = [
//     {
//       id: 1,
//       src: "/images/cover_image/1.png",
//       title: "Bring Your Human to Work",
//       subtitle:
//         "10 Surefire Ways to Design a Workplace That Is Good for People, Great for Business, and Just Might Change the World",
//       author: "Erica Keswin",
//       timeTakenToRead: 13,
//       numberOfReads: "1.9k",
//       status: "finished",
//       complete: 31,
//       synopsis:
//         "We’re often taught to keep our professional and personal lives separate. But it might be time to rethink this rule. That’s because when you try to keep a strict divide between your work and the rest of your life, you're missing out on a key opportunity – to bring your humanity to work with you and to be your authentic self all day, every day. ",
//       whoIsItFor:
//         "Bring Your Human to Work (2018) explores how organizations can put human connection at the center of their business. It outlines the benefits, both financial and social, of encouraging better communication and deeper relationships between coworkers. ",
//       aboutAuthor: "some information about the author 'Erica Keswin'. ",
//     },
//     {
//       id: 2,
//       src: "/images/cover_image/2.svg",
//       title: "Beyond Entrepreneurship",
//       subtitle: "Turning Your Business into an Enduring Great Company",
//       author: "jim collins & bill lazier ",
//       timeTakenToRead: 15,
//       numberOfReads: "1.9k",
//       status: "currentlyReading",
//       complete: 31,
//       synopsis:
//         "essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
//       whoIsItFor:
//         "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
//       aboutAuthor:
//         "some information about the author 'jim collins & bill lazier'. ",
//     }
//   ];

//   axios.mockResolvedValue({data : books})
//   axios.onGet("http://localhost:3001/books/1").reply(200,books[0]);


//   const changedElement  = screen.getAllByText("Bring Your Human to Work");
//   expect(changedElement).toBeInTheDocument();

// });
