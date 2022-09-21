 //Imports
    import React from 'react'
    import { Card, CardBody, CardTitle, Button } from 'reactstrap'


 //Component declaration
    const CatIndex = ({ cats }) => {
     //JSX Return
    return (
        <main>
            {cats.map((cat, index) => {
    return (
      <Card
        style={{
          width: "14rem"
        }}
        key={index}
      >
        <img alt={`profile of a cat named ${cat.name}`} src={cat.image} />
        <CardBody>
          <CardTitle tag="h5">{cat.name}</CardTitle>
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Age: {cat.age}
          </CardSubtitle> */}
          <Button>See More Details</Button>
        </CardBody>
      </Card>
    )
  })
}
        </main>
    )
}
    export default CatIndex