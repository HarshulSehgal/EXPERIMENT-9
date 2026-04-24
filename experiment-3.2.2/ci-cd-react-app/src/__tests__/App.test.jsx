import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders experiment heading", () => {
    render(<App />);
    expect(screen.getByText(/Experiment 3.2.2/i)).toBeInTheDocument();
  });
});
