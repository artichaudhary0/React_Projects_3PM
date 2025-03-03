import React from "react";

/*
Fragments <></> or <React.Fragement>
    1 : Allow grouping multiple elements without adding extra node to the dom.
    2 : also helps in avoiding unnecessory div wrapper
*/

const FragmentsExample = () => {
  return (
    <React.Fragment>
      <h1>Fragment</h1>
      <h1>Hello Fragment</h1>
    </React.Fragment>
  );
};

export default FragmentsExample;
