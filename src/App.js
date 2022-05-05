import React from 'react'
import Contact from './components/Contact';


function App() {
  return (<div>
    <h1 className="heading">My Contacts</h1>
    <Contact
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Contact
      name="Madonna"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTds5xMDlZn6SR2ufT19rsZvkHpVGGvt8DcZQ&usqp=CAU"
      alt="avatar_img"
      tel="+123 44546 689"
      email="m@madonna.com"
    />
    <Contact
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
      tel="+153 47846 569"
      email="jack@nowhere.com"
    />

  </div>
  );
}

export default App;
