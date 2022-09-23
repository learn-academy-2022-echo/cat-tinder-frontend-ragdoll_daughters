 //Imports
    import React from 'react'
    import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
    import { NavLink } from 'react-router-dom'

// Component declaration 
const CatIndex = ({ cats }) => {
  // JSX Return
  return (
    <main className="display-flex">
      { cats?.map((cat, index) => {
        return (
          <Card
                style={{
                  width: '18rem'
                }}
                key={index}
              >
                <img
                  alt="Sample"
                  src={cat.image}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {cat.name}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    {cat.age}
                  </CardSubtitle>
                  <CardText>
                    {cat.enjoys}
                  </CardText>
                  <NavLink to={`/catshow/${cat.id}`} className="Nav-Link">
                  <Button>
                    Button
                  </Button>
                  </NavLink>
                </CardBody>
              </Card>
          
        )
      })
      }
    // </main>
  )
}

export default CatIndex













 //Component declaration
 
  
     //JSX Return
//     return (
//       <>
//       { wildCats?.map({cat, index}) => {
//         return (
//       <Card
//       style={{
//         width: '18rem'
//       }}
//     >
//       <img
//         alt="Sample"
//         src="https://picsum.photos/300/200"
//       />
//       <CardBody>
//         <CardTitle tag="h5">
//           Cat name
//         </CardTitle>
//         <CardSubtitle
//           className="mb-2 text-muted"
//           tag="h6"
//         >
//           Cat age
//         </CardSubtitle>
//         <CardText>
//           cat enjoys
//         </CardText>
//         <Button>
//           Button
//         </Button>
//       </CardBody>
//     </Card>
//     </>
//     )
// }
//     export default CatIndex