import { screen, render } from "@testing-library/react"
import Home from './Home'

describe("<Home />", () => {
  it("renders the home page for the user", () => {
    render(<Home />) 
    const element = screen
  })
})