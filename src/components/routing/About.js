import { Link, useLocation, useNavigate } from "react-router-dom";

function About(props) {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <h1>This is About page</h1>
      {state && (
        <div>
          <h3>Passed data:</h3>
          <p>From: {state.from}</p>
          <p>Message: {state.message}</p>
          <p>Timestamp: {state.timestamp}</p>
        </div>
      )}
      <hr />
      <button onClick={goBack} className="back-button">
        Go Back
      </button>

      <p>
        <input
          type="checkbox"
          onChange={() => navigate("/contact")}
        ></input>
        <span>Check this checkbox to go to the contact page</span>
      </p>
    </>
  );
}
export default About;
