import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from './Footer'

describe("<Footer />", () => {
  it("renders without error", () => {
    render(
      <BrowserRouter>
        <Footer />
        </BrowserRouter>
        ) 
    const element = screen.getByText("Created by Vanessa and Brooky")
    expect(element).toBeInTheDocument()
  })
})