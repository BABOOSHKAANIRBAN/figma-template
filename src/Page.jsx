import icon1 from "./assets/Icon.jpg";

function Page() {
  return (
    <>
      <div className="page2">
        <div className="page2-image">
          <div className="page2-text">
            <h1>Light, Fast & Powerful</h1>
            <div className="page2-paragraph">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
                laborum. Magni itaque ratione numquam facilis labore quam nam
                nemo officia? Odit natus aliquam fuga eius perferendis
                praesentium provident dignissimos quidem!
              </p>
            </div>
            <div className="icon-section">
              <div className="icn1-div">
                <img src={icon1} alt="" />
              </div>
              <div className="icn1-div">
                <img src={icon1} alt="" />
              </div>
            </div>
            <div className="icon-para-section">
              <div className="icn1-para-div">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae, consectetur. At, amet aperiam quod fugit totam
                  velit praesentium culpa debitis ducimus officia est placeat
                  sit repellendus rem deserunt porro ex!
                </p>
              </div>
              <div className="icn1-para-div">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae, consectetur. At, amet aperiam quod fugit totam
                  velit praesentium culpa debitis ducimus officia est placeat
                  sit repellendus rem deserunt porro ex!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
