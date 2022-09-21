import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from './Home'

describe("<Home />", () => {
  it("renders without error", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
        ) 
    const element = screen.getByText("Welcome to Wildcat Tinder")
    expect(element).toBeInTheDocument()
  })
})