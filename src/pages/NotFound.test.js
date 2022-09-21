import { screen, render } from "@testing-library/react"
import NotFound from './NotFound'

describe("<NotFound />", () => {
  it("renders without error", () => {
    render(<NotFound />) 
    const element = screen.getByText("404 No One Is Home!")
    expect(element).toBeInTheDocument()
  })
})