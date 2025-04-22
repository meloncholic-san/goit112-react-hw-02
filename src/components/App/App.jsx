
import { useState, useEffect } from 'react';

import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import css from './App.module.css';
import Notification from '../Notification/Notification';

export default function App() {

    const [feedback, setFeedback] = useState(() => {

      const savedFeedback = localStorage.getItem("saved-feedback")

      if (savedFeedback !== null) {
        return JSON.parse(savedFeedback);
      }
        return {
          good: 0,
          neutral: 0,
          bad: 0
        }
    }
);

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positivePercent =  Math.round((feedback.good / totalFeedback) * 100);
    const updateFeedback = feedbackType => {
      setFeedback(prevFeedback => {
        return {
          ...prevFeedback,
          [feedbackType]: prevFeedback[feedbackType] + 1
        }
      })
    }

      useEffect(() => {
        localStorage.setItem('saved-feedback', JSON.stringify(feedback));
      }, [feedback]);

  return (
    <div className={css.container}>

    <Description/ >
    <Options updateFeedback = {updateFeedback} totalFeedback = {totalFeedback} setFeedback = {setFeedback}/>
    {totalFeedback ? <Feedback feedback = {feedback} totalFeedback = {totalFeedback} positivePercent = {positivePercent} />: <Notification/> }

    </div>
  );
}
