import React from "react";
import { useEffect, useRef } from "react";
function BasicDomMani() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.style.border = "1px solid yellow";
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" placeholder="focus on load" />
    </>
  );
}

export default BasicDomMani;
