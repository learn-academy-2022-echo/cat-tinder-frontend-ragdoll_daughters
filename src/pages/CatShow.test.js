import { screen, render } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import CatShow from './CatShow'
import wildCats from "../mockCats"

const renderComponent = () => {
    render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
          <Route path='catshow/:id' element={<CatShow cats={wildCats} />}/>
        </Routes>
      </MemoryRouter>
    )
  }

  describe('CatShow', () => { 
    test("render a card with a cat enjoys", ()=>{
      renderComponent()
      expect(screen.getByText(wildCats[0].enjoys)).toBeInTheDocument()
    })
 })