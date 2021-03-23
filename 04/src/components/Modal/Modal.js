import React from 'react';

import styles from './Modal.module.scss';
import Form from '../Form/Form';
import Button from '../Button/Button';

const Modal = ({ closeModalFn }) => (
  <div className={styles.wrapper}>
    <div className={styles.flexbox}>
      <Button 
        onClick={closeModalFn}
        secondary
      >
        X
      </Button>
    </div>
    <Form />
  </div>
);

export default Modal;