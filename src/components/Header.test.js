import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from './Header'

describe("<Header />", () => {
  it("renders without error", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
        ) 
    const element = screen.getByText("New Wildcat")
    expect(element).toBeInTheDocument()
  })
})