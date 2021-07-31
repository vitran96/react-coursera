import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function RenderCard({item}) {
  const maybeSubtitle = () => {
    if (item.designation)
    {
      return (
        <CardSubtitle>{item.designation}</CardSubtitle>
      );
    }

    return null;
  };

  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {maybeSubtitle()}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home({dish, promotion, leader}) {
  return (
    <div className="container">
      <div className="row align-item-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
