import React from 'react';

function Event() {
  const onClickButton = (e) => {
    console.log(e);
    e.stopPropagation();
  };
  const onClickInnerDiv = (e) => {
    console.log('inner div clicked');
  };
  const onClickOuterDiv = (e) => {
    console.log('outer div clicked');
  };
  const onClickOuterMostDiv = (e) => {
    console.log('outer most clicked');
  };
  const onHoverMouse = (e) => {
    console.log('mouse hovered on button');
    // e.stopPropagation();
  };
  return (
    <div
      style={{ border: '2px solid black', padding: '6rem', margin: '2rem' }}
      onClick={onClickOuterMostDiv}
    >
      <div
        style={{ border: '2px solid blue', padding: '4rem' }}
        onClick={onClickOuterDiv}
      >
        {/* onClickCapture is used for event capturing */}
        {/* onClick is used for event bubbling */}
        {/* e.stopPropagatig  is used to stop event propagation */}
        <div
          style={{ border: '2px solid red', padding: '2rem' }}
          onClick={onClickInnerDiv}
        >
          <button
            onClickCapture={onHoverMouse}
            onClick={onClickButton}
            style={{ height: '3rem', width: '8rem' }}
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Event;
