import { screen, render } from '@testing-library/react'
import CatNew from './CatNew'

describe("<CatNew/>", () => {
    test("renders a heading on the CatNew page for the user", () => {
      // Arrange
      render(<CatNew/>)
      // Act - 
        // can be interactions like clicking, 
        // be passive actions like seeing something
      const heading = screen.getByRole('heading', {
        name: /Add Your Wild Cat/i
      })
      // screen.debug(heading)
      expect(heading).toBeInTheDocument()
    })

      // multiple entry query
  test(" has multiple input fields on the form", () => {
    render(<CatNew/>)
    const textbox = screen.getAllByRole("textbox")
    screen.debug(textbox)
    expect(textbox[0]).toBeEnabled()
    expect(textbox.length).toEqual(3)
    expect(textbox.length).toBeGreaterThan(0)
    // Received has type:  array
    // Received has value: [<input class="form-control" name="name" placeholder="Put your that fur ball's name" type="text" />, <input class="form-control" name="enjoys" placeholder="What gets your cat meowing" type="text" />, <input class="form-control" name="image" placeholder="Load up your purrrrrfect photo" type="url" />]

  })

})
