import React, { useEffect, useState } from "react";
import Selection from "./selection";
import "./style.scss";

const Home = ({ history }) => {
  const [buttonActive, setButtonActive] = useState(0);
  const [steps, setSteps] = useState(1);
  const [continueClick, setContinueClick] = useState(false);

  useEffect(() => {
    if(steps === 2) history.push('/login')
    if(steps === 3) history.push('/verify')
    if(steps === 4) history.push('/signup')
  }, [steps])

  return (
    <div className="home">
      <div className="container centered">
        <div className="selectUser centered">
          {steps == 1 && (
            <Selection
              setContinueClick={setContinueClick}
              setButtonActive={setButtonActive}
              buttonActive={buttonActive}
              continueClick={continueClick}
              setSteps={setSteps}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
