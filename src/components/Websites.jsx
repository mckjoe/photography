import React from 'react';

function Websites() {
  return(
    <div>
      <ul className="websites">
        <li className="website">
          <p><strong>smokeLess</strong></p>
          <img src="https://pro-color.ru/wa-data/public/shop/products/48/09/948/images/7045/7045.970.png" alt="No smoking icon." />
          <p>smokeLess is a website that tracks how much time has passed since somebody quit smoking.  Eventually I will build smokeLess with React Native but currently it is built using React.</p>
          <a target="_blank" href="https://smokelessv3.herokuapp.com/">https://smokelessv3.herokuapp.com</a>
        </li>
        <li className="website">
          <p><strong>Dr. Finder</strong></p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldRh4CMGE843LJKzAOIOjETcEqSDQg7qHqK7NPiWuijaJotah" alt="Doctors office icon" />
          <p>Dr. Finder is a website built using an API call with both JQuery and JavaScript to locate doctors by name, by ailment, or Portland Oregon doctors. It's built with JavaScript.</p>
          <a target="_blank" href="https://dr-locator.firebaseapp.com/">https://dr-locator.firebaseapp.com/</a>
        </li>
        <li className="website">
          <p><strong>The Space</strong></p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSe6vK7r6by2ndk-Di3j1rbFELT8zQTt7Q-sPORJcq8vxuzzJcA" alt="Workspace icon" />
          <p>The space is a site I built for a make-believe local co-working space to practice with styling and using flexbox and for fun.  The space is built using Typescript and Angular.</p>
          <a target="_blank" href="https://space-6aa0d.firebaseapp.com/">https://space-6aa0d.firebaseapp.com/</a>
        </li>
        <li className="website">
          <p><strong>Le Ficus</strong></p>
          <img src="https://image.flaticon.com/icons/png/512/48/48442.png" alt="Fork, spoon and knife icon." />
          <p>Le Ficus was a project I built for fun with a friend.  Le Ficus is a make-believe restaraunt. The site is built using Typescript and Angular to practice with layouts.</p>
          <a target="_blank" href="https://space-6aa0d.firebaseapp.com/">https://space-6aa0d.firebaseapp.com/</a>
        </li>
      </ul>
    </div>
  );
}

export default Websites;
