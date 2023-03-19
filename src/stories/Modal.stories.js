import react from "react";
import { useState } from "react";
import { storiesOf } from "@storybook/react";
import '../styles.css'

import { Modal } from "../components/Modal/Modal.jsx";

const stories = storiesOf('App test', module);

stories.add('App', () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <header className="App-header">       
        <button onClick={() => setModal({
            modal:true
        })}>
          Open Modal
        </button>
      </header>
      
      <Modal  title={ 'Employee was successfully created' }
              isOpen={modal}
              isClose={ () => setModal(false) } >
      </Modal>        
    </div>
  );
})