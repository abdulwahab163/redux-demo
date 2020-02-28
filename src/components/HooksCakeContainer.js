import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes); //mapStateToProps
  const dispatch = useDispatch(); //mapDispatchToprops
  return (
    <div>
      <h2>Num of Cakes hooks - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake(3))}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
