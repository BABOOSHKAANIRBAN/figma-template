import Button1 from "./Button components/Button1";

function Header() {
  return (
    <>
      <div className="header">
        <header>
          <div className="navbar">
            <nav>
              <div className="navbar-menu">
                <ul>
                  <li>
                    <a href="./">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="navbar-logo">
                <h1>Landing</h1>
              </div>
              <div>
                <Button1 button1="Buy Now" />
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
