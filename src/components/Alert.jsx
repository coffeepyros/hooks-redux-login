import React from "react";
import { useDispatch } from "react-redux";
import { hideAlert } from "../redux/actions";

export default function Alert() {
  const dispatch = useDispatch();
  return (
    <div id="alert">
      <h2>Alert</h2>
      Something went wrong. Better message later.
      <button
        onClick={(e) => {
          dispatch(hideAlert());
        }}
      >
        Try Login again
      </button>
    </div>
  );
}
