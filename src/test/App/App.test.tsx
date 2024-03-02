import App from "../../App";
import { render, screen } from '@testing-library/react';

it("Renders correctly..", ()=>{
  render(<App/>);
  const text = screen.getByText(/Hello/i);
  expect(text).toBeVisible();
})
