import React from 'react'
import Contact from './components/Contact';
import info from './info';


function App() {
  return (<div>
    <h1 className="heading">My Contacts</h1>
    <Contact
      name={info[0].name}
      img={info[0].imgURL}
      tel={info[0].phone}
      email={info[0].email}
    />
    <Contact
      name={info[1].name}
      img={info[1].imgURL}
      tel={info[1].phone}
      email={info[1].email}
    />
    <Contact
      name={info[2].name}
      img={info[2].imgURL}
      tel={info[2].phone}
      email={info[2].email}
    />

  </div>
  );
}

export default App;
