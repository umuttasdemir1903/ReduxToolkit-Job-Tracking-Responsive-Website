import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h2>
        <img
          height={80}
          src="https://cdn.freebiesupply.com/logos/large/2x/job-logo-png-transparent.png"
          alt="logo"
        />
        <span>JOB TRACKİNG</span>
      </h2>
      <nav>
        <NavLink to={"/"}>Job List</NavLink>
        <NavLink to={"/add-job"}>Add Job</NavLink>
      </nav>
    </header>
  );
};

export default Header;
