import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectCount,
  resetCounter,
} from '../counter/counterSlice';

import styles from './RemoteReset.module.css';


export function RemoteReset() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();


  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>

      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(resetCounter())}
        >
          Reset
        </button>

      </div>
    </div>
  );
}
