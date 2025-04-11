// import ClickTracker from '../ClickTracker';
// import Reader from '../Reader/Reader';
// import articles from '../../articles.json';

// import { useState } from 'react';
// import Timer from '../Timer';
// import Sidebar from '../Sidebar/Sidebar';
// import ThemeSwitcher from '../ThemeSwitcher';
import ActivityTracker from '../ActivityTracker';
import css from './App.module.css';

export default function App() {
  // const [isTimerMounted, setIsTimerMounted] = useState(false);

  // const toggleTimer = () => setIsTimerMounted(!isTimerMounted);

  // const [isOpen, setIsOpen] = useState(false);

  // const openSidebar = () => setIsOpen(true);

  // const closeSidebar = () => setIsOpen(false);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Effects in React</h1>

      <ActivityTracker />

      {/* <ThemeSwitcher /> */}

      {/* <Reader items={articles} /> */}

      {/* <ClickTracker /> */}

      {/* <button onClick={openSidebar}>Open</button>
      {isOpen && <Sidebar onClose={closeSidebar} />} */}

      {/* <button onClick={toggleTimer}>{isTimerMounted ? 'Hide' : 'Show'}</button>
      {isTimerMounted && <Timer />} */}
    </div>
  );
}
