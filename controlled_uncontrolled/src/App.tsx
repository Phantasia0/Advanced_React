import React, { useState } from "react";

import { UncontrolledModal } from "./components/uncontrolled-modal";
import { ControlledModal } from "./components/controlled-modal";

function App() {
  const [shouldDisplay, setShouldDisplay] = useState<boolean>(false);
  return (
    <>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h3>I am the body of the modal</h3>
      </ControlledModal>

      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Display Modal"}
      </button>
    </>
  );
}

export default App;
