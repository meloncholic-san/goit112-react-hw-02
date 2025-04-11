/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні
 */

import { useEffect, useState } from 'react';

export default function Timer() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <b>{date.toLocaleTimeString()}</b>
    </div>
  );
}
