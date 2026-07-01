import React, { Suspense } from "react";
const RemoteButton = React.lazy(() => import("remote/Button"));

function App() {
  return (
    <div>
      <h1>Host Application</h1>

      <Suspense fallback={<h2>Loading...</h2>}>
        <RemoteButton />
      </Suspense>
    </div>
  );
}

export default App;
