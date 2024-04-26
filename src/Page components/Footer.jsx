import Button1 from "../Button components/Button1";

function Footer() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />


      <div className="full-footer">
        <div className="footer1">
          <div className="footer1-section">
            <footer id="footer1">
                <div className="footer-copyright">
                    <p>&copy;2024 Your Company</p>
                </div>
              <div className="footer1-logo">
                <h1>Landing</h1>
              </div>
              <div>
                <Button1 button1="Purchase Now" />
              </div>
            </footer>
          </div>
        </div>
        <hr className="line" />
        <div className="footer2">
          <div className="footer2-section">
            <footer id="footer2">
              <div className="footer2-menu">
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
              <div className="social">
                <div className="social-items"><i className="fa-brands fa-x-twitter"></i></div>
                <div className="social-items"><i className="fa-brands fa-linkedin"></i></div>
                <div className="social-items"><i className="fa-brands fa-facebook"></i></div>
                <div className="social-items"><i className="fa-brands fa-instagram"></i></div>
                <div className="social-items"><i className="fa-brands fa-youtube"></i></div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
