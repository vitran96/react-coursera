import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay } from 'reactstrap';


function RenderMenuItem({ dish }) {
  return (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <h5 className="card-title">{dish.name}</h5>
          </CardImgOverlay>
        </Link>
      </Card>
    </div>

  );
}

function Menu({ dishes }) {

  const menu = dishes.map(dish => (<RenderMenuItem dish={dish} />));

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/home'>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
}

export default Menu;
