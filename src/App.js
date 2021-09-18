import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
