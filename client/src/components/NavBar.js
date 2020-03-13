import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

function NavBar() {
   const [darkMode, setDarkMode] = useDarkMode(false);
   
   const toggleMode = e => {
       e.preventDefault();
       setDarkMode(!darkMode);
   };

   return (
       <nav>
           <div className='dark-mode_toggle'>
               <button onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}>Dark Mode</button>
           </div>
           <h1>Women's World Cup Players 2019</h1>
       </nav>
   )
};

export default NavBar;