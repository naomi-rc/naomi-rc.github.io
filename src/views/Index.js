import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import PortfolioFooter from "components/Footers/PortfolioFooter.js";

// index sections
import SectionWelcome from "views/index-sections/SectionWelcome.js";
import SectionProjects from "views/index-sections/SectionProjects.js";
import PROJECTS from "assets/projects.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionWelcome />
        <SectionProjects projects={PROJECTS}/>
        <PortfolioFooter />
      </div>
    </>
  );
}

export default Index;
