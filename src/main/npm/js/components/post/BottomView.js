
import ReactDOM from "react-dom";
import React, { useState } from 'react';

export function BottomView(props) {
  console.log(props);
  return (
      <div>
          {props.clickCount} 여기 출력됨
          {props.children}
      </div>
  )
}