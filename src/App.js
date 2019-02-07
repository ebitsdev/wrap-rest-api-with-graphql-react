import React from "react";
import { Query } from "react-apollo";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Spinner
} from "reactstrap";
import { GET_DATA_FROM_GRAPHQL_API } from "./queries/Queries";

import "./App.scss";

const App = ({ page }) => (
  <Query query={GET_DATA_FROM_GRAPHQL_API}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner color="primary" />;
      if (error)
        return (
          <div>{`There was an error fetching the data ${error.message}`}</div>
        );
      console.log(data);
      return (
        <div className="App">
          <Navbar className="nav-header" color="blue" expand="md">
            <NavbarBrand href="/">Home</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Page</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/ebitsdev/wrap-rest-api-with-graphql-react">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <h1 className="heading-front">React JS with GraphQL API</h1>
          <Container>
            <Row>
              {data.page.map((item, i) => (
                <Col key={item.id} sm="6">
                  <h2 className="article-heading">{item.title}</h2>
                  {item.body[0].summary}
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      );
    }}
  </Query>
);

export default App;
