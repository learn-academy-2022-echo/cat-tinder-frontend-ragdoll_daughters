 //Imports
    import React from 'react'
    import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
    import wildcats from 'mockCats'

// Component declaration 
const CatIndex = ({ cats }) => {
  // JSX Return
  return (
    <main className="display-flex">
      { wildcats?.map((cat, index) => {
        return (
          <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  alt="Sample"
                  src="https://picsum.photos/300/200"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Cat name
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Cat age
                  </CardSubtitle>
                  <CardText>
                    cat enjoys
                  </CardText>
                  <Button>
                    Button
                  </Button>
                </CardBody>
              </Card>
          
        )
      })
      }
    </main>
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