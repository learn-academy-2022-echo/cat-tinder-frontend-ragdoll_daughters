 //Imports
 import React, {useState} from 'react'
 import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
 import { useNavigate } from "react-router-dom"

 //Component declaration
 const CatNew = ({ createCat }) => {

    // data
    const navigate = useNavigate()
    const [newCat, setNewCat] = useState({
      name: "",
      age: "",
      enjoys: "",
      image: ""
    })

      // methods/functions
  const handleCats = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    setNewCat({...newCat, [e.target.name]: e.target.value})
    console.log(newCat)
    // Pass the path you want to navigate as the argument 
  }
  
  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  console.log("newcat object", newCat)

     //JSX Return
    return (
       <>
       <h2> Add Your Wild Cat </h2>
      <Form>
        <FormGroup>
          <Label for="name">
            Wild Cat's Name
          </Label>
          <Input
            name="name"
            placeholder="Choose a wild name"
            type="text"
            onChange={handleCats}
            value={newCat.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Wild Cat's Age
          </Label>
          <Input
            name="age"
            placeholder="How may lives have you used"
            type="number"
            onChange={handleCats}
            value={newCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
          Wild Cat's Interests
          </Label>
          <Input
            name="enjoys"
            placeholder="What gets your Wildin"
            type="text"
            onChange={handleCats}
            value={newCat.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
           Wild Cat's Profile
          </Label>
          <Input
            name="image"
            placeholder="A picture of you on your wild day"
            type="url"
            onChange={handleCats}
            value={newCat.image}
          />
        </FormGroup>
        <Button
          onClick={handleSubmit}
          name="submit"
        >
          Submit
        </Button>
      </Form>
    </>

    )
}
    export default CatNew