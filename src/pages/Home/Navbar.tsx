import { Link } from "react-router-dom";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li> */}
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="">Teachers</Link>
      </li>
      <li>
        <Link to="">Quiz</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  // absolute -top-6 left-0 z-50
  return (
    <>
      <div className="navbar relative z-40 items-center flex  bg-transparent ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-white bg-teal-600 rounded-box z-[1]  mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <div className="w-48 h-36 flex  items-start">
            <img
              src="../../../public/img/logo-01.png"
              className="w-full h-full"
            ></img>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-semibold text-base tracking-wider menu-horizontal px-1">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="justify-between" to={""}>
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to={""}>Settings</Link>
              </li>
              <li>
                <Link to={""}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
