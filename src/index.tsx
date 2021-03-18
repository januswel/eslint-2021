import React from "react";

export function App() {
  return <div>1</div>;
}

function Header() {
  const [state, setState] = React.useState(0);
  React.useEffect(() => {
    console.log(state);
  }, []);
  return <div>Sample{state}</div>;
}
