import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/index";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={number => props.buyCake(number)}> Buy Cakes</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
