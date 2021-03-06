import React, { Component } from "react";
import { Menu, Segment, Sticky } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import ContactUs from "../ContactUs";
import Gallery from "../Gallery";
import JobQuiz from "../JobQuiz";
import Assortment from "../Assortment";

import "./App.css";

class App extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Router>
          <Sticky>
            <Segment
              inverted
              style={{
                direction: "rtl",
                // position: "fixed",
                width: "100%",
                zIndex: "11111"
              }}
            >
              <Menu inverted pointing secondary tabular>
                <Link to="/">
                  <Menu.Item
                    name="home"
                    content="בית"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link to="/gallery">
                  <Menu.Item
                    name="gallery"
                    content="גלריה"
                    active={activeItem === "gallery"}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link to="/jobQuiz">
                  <Menu.Item
                    name="jobQuiz"
                    content="איזה תפקיד מתאים לי?"
                    active={activeItem === "jobQuiz"}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link to="/contactUs">
                  <Menu.Item
                    name="contactUs"
                    content="צרו קשר"
                    active={activeItem === "contactUs"}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link to="/assortment">
                  <Menu.Item
                    style={{
                      border: "2px dashed orange"
                    }}
                    name="assortment"
                    content="מיונים"
                    active={activeItem === "assortment"}
                    onClick={this.handleItemClick}
                  />
                </Link>
              </Menu>
            </Segment>
          </Sticky>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/jobQuiz">
              <JobQuiz />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <Route path="/assortment">
              <Assortment />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
