import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardImg, CardImgOverlay } from 'reactstrap';

function About() {

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/home'>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About us</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h3>Our History</h3>
          <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
          <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
        </div>
        <div className="col-sm">
          <Card>
            <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
            <CardBody>
              <dl className="row">
                <dt class="col-6">Started</dt>
                <dd class="col-6">3 Feb 2013</dd>
                <dt class="col-6">Major Stake Holder</dt>
                <dd class="col-6">HK Fine Foods Inc.</dd>
                <dt class="col-6">Last Year's Turnover</dt>
                <dd class="col-6">$1,250,375</dd>
                <dt class="col-6">Employees</dt>
                <dd class="col-6">40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <div className="card card-body">
            <blockquote className="blockquote">
              <p>You better cut the pizza in four piecues because I'm not hungry enough to eat six.</p>
              <footer>
                <cite>The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;