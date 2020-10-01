import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import "./style.css";

function CakeContainer(props) {
  return (
    <div className="container">
      <div className="content">
        <h2>Number of Cakes: {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(CakeContainer);
