import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { BsCartCheckFill } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi2";
import { items } from "./MData";
import { useState } from "react";

function NavScrollExample({ cart, setData }) {
  const location = useLocation();
  // find categroy product
  const fillterbyCategroy = (categroy) => {
    const element = items.filter((product) => product.category === categroy);
    setData(element);
  };

  // find price base peoduct

  const filterbyprice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const [searchProduct, setSearchProduct] = useState("");
  const navigate = useNavigate();
  const hundlerSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchProduct}`);
    setSearchProduct("");
  };

  return (
    <>
      <header className="sticky-top">
        <Navbar expand="lg" className="bg-dark navbar-dark py-3">
          <Container>
            <Navbar.Brand href="#">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                <HiShoppingBag style={{ fontSize: "40px", color: "white" }} />{" "}
                Products
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action2">
                  <Link to={"/cart"}>
                    <Button variant="primary">
                      <BsCartCheckFill style={{ fontSize: "30px" }} />{" "}
                      <Badge bg="secondary">{cart.length}</Badge>
                    </Button>
                  </Link>
                </Nav.Link>
              </Nav>
              <Form  onSubmit={hundlerSubmit} className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {location.pathname == "/" && (
          <Navbar collapseOnSelect className="bg-dark navbar-dark">
            <Container>
              <Navbar.Brand href="#home">Filter By {"->"}</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Filter By" id="collapsible-nav-dropdown">
                    <NavDropdown.Item
                      href="#action/3.1"
                      onClick={() => setData(items)}
                    >
                      No Filtter
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.1"
                      onClick={() => fillterbyCategroy("mobiles")}
                    >
                      Mobiles
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.1"
                      onClick={() => fillterbyCategroy("laptops")}
                    >
                      Lapptos
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.1"
                      onClick={() => fillterbyCategroy("tablets")}
                    >
                      Tablates
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.1"
                      onClick={() => filterbyprice(29999)}
                    >
                      {">=29999"}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.1"
                      onClick={() => filterbyprice(49999)}
                    >
                      {">=49999"}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.1"
                      onClick={() => filterbyprice(69999)}
                    >
                      {">=69999"}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.1"
                      onClick={() => filterbyprice(89999)}
                    >
                      {">=89999"}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav></Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}
      </header>
    </>
  );
}

export default NavScrollExample;
