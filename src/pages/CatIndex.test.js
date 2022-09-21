import { screen, render } from "@testing-library/react"
import CatIndex from './CatIndex'
import wildCats from "../mockCats"
import { BrowserRouter } from 'react-router-dom'

describe("<CatIndex />", () => {
  it("renders a card for each cat that is passed down to component", () => {
    render(
        <BrowserRouter>
         <CatIndex cats={wildCats}/>
        </BrowserRouter>
      )
    wildCats.forEach(cat => {
        const meowElement = screen.getByText(cat.name)
        expect(meowElement.toBeInTheDocument())
    })

    // expect(element).toBeInTheDocument()
  })
})