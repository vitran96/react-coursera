import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({item, isLoading, errorMessage}) {
  if (isLoading) {
    return (
      <Loading />
    );
  } else if (errorMessage) {
    return (
      <h4>{errorMessage}</h4>
    );
  }

  const maybeSubtitle = () => {
    if (item.designation) {
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

function Home(props) {
  const {dish, dishesLoading, dishesErrorMessage} = props;
  const {promotion} = props;
  const {leader} = props;

  return (
    <div className="container">
      <div className="row align-item-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish}
            isLoading={dishesLoading}
            errorMessage={dishesErrorMessage} />
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
