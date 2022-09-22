import { screen, render } from "@testing-library/react"
import CatIndex from './CatIndex'
import wildCats from "../mockCats"
import { BrowserRouter } from 'react-router-dom'

describe("<CatIndex />", () => {
  // user should see the CatIndex page
    it("renders a card for each cat that is passed down to component", () => {
      // Arrange
      render(
        <BrowserRouter>
          <CatIndex cats={mockCats}/>
        </BrowserRouter>
      )
      // Act
      wildCats.forEach(cat => {
        const meowElement = screen.getByText()
        expect(meowElement).toBeInTheDocument()
      })
      // Asserts
      // expect(element).toBeInTheDocument()
    })
  })
       
  