/**
 * - Додати обратник keydown при монтуванні
 * - Закривати по Escape
 * - Розібрати чому реєструється два слухача (Strict Mode)
 * - Очистити слухач при розмонтуванні
 */

import { useEffect } from 'react';
import css from './Sidebar.module.css';

// Mount (addEventListener) > Unmount (removeEventListener) > Mount (addEventListener)

export default function Sidebar({ onClose }) {
  useEffect(() => {
    const handleKeypress = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeypress);

    return () => {
      document.removeEventListener('keydown', handleKeypress);
    };
  }, [onClose]);

  return (
    <div className={css.wrapper}>
      <button className={css.closeButton} onClick={onClose}>
        Close
      </button>
      <p className={css.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        voluptatum culpa modi? Quaerat repellat sit error officia dolore?
        Suscipit nisi aliquam voluptates accusamus repellat illo expedita
        necessitatibus laudantium animi quo?
      </p>
    </div>
  );
}
