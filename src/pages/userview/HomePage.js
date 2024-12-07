import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import categories from "../../categories";
import cuisines from "../../cuisines";
import restaurants from "../../restaurants";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying cuisine names and images */}
         <h4>Try New Cuisines</h4>
          <Row>
            {cuisines.map((cuisine) => (
              <Col key={cuisine.id} sm={12} md={6} lg={4} xl={3}>
                <ItemCard item={cuisine} itemName="cuisine" />
              </Col>
            ))}
          </Row>
      </div>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying category names and images */}
        <h4>Get inspiration for your order</h4>
        <Row>
          {categories.map((category) => (
              <Col key={category.id} sm={12} md={6} lg={4} xl={3}>
                <ItemCard item={category} itemName="category" />
              </Col>
            ))}
        </Row>
      </div>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying restaurant names and images */}
        <h4>Available restaurants</h4>
        <Row>
          {restaurants.map((restaurant) => (
              <Col key={restaurant.id} sm={12} md={6} lg={4} xl={3}>
                <ItemCard item={restaurant} itemName="restaurant" />
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

export default HomePage;
