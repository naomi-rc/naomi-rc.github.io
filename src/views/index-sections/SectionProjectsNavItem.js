import {React} from 'react';
import {
  NavItem,
  NavLink,
} from "reactstrap";
import 'assets/css/custom.css'


function ProjectNavItem(data) {
  return (
    <>
    <NavItem>
      <NavLink
        className={data.activeTab === data.index ? "active pointer" : "pointer"}
        onClick={() => {
          data.toggle(data.index);
        }}
      >
        <h4><strong>{data.category}</strong></h4>
      </NavLink>
    </NavItem>
    </>
  );
}

export default ProjectNavItem;
