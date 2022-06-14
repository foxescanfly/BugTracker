import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import BugsDisplay from "./Views/BugsDisplay/BugsDisplay";
import Dashboard from "./Views/Dashboard/Dashboard";
import BugView from "./Views/BugView/BugView";


const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    
    <Routes>
      <Route exact path="/" element={<Dashboard/>} />
      <Route exact path="/bugs" element={<BugsDisplay/>} />
      <Route exact path="/Pages" element={() => "Pages"} />
      <Route exact path="/faq" element={() => "FAQ"} />
      <Route exact path="/contact" element={() => "Contact"} />
      <Route path="bugs/:bugId" element={<BugView/>} />
    </Routes>
  </Container>
);

export default Content