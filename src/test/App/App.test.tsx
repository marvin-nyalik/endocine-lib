import App from "../../App";
import { render, screen } from '@testing-library/react';

it("Renders Books component for the route '/' ", () => {
  render(<App/>);

  const booksDiv = screen.getByTestId("books-component");
  expect(booksDiv).toBeInTheDocument();
})
