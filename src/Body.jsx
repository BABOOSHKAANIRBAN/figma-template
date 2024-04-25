import Button2 from "./Button components/Button2";
import Button3 from "./Button components/Button3";

function Body() {
  return (
    <>
      <div className="page1">
        <div className="page1-image">
          <div className="page1-text">
            <h1>Introduce Your...</h1>
            <div className="page1-paragraph">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
                laborum. Magni itaque ratione numquam facilis labore quam nam
                nemo officia? Odit natus aliquam fuga eius perferendis
                praesentium provident dignissimos quidem!
              </p>
              <div className="btn-section">
                <div className="btn2-div">
                  <Button2 button2="Purchase UI Kit" />
                </div>
                <div className="btn3-div">
                  <Button3 button3="Learn More" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
