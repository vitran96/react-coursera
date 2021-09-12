import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({ item, isLoading, errorMessage }) {
  if (errorMessage) {
    return (
      <h4>{errorMessage}</h4>
    );
  } else if (isLoading || !item) {
    return (
      <Loading />
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
  const { dish, dishesIsLoading, dishesErrorMessage } = props;
  const { promotion, promotionsLoading, promotionsMessage } = props;
  const { leader } = props;

  return (
    <div className="container">
      <div className="row align-item-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish}
            isLoading={dishesIsLoading}
            errorMessage={dishesErrorMessage} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion}
            isLoading={promotionsLoading}
            errorMessage={promotionsMessage} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
