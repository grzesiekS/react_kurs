import React from "react";
import Input from "../Input/Input";
import styles from "./Form.module.scss";

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <h2>Add new twitter account</h2>
    <form autoComplete='off' className={styles.form} onSubmit={submitFn}>
      <Input 
        name='name'
        label='Name'
        maxLength={30}
      />
      <Input 
        name='link'
        label='Twitter Link'
      />
      <Input 
        name='image'
        label='Image'
      />
      <Input
        tag='textarea'
        name='description'
        label='Description'
      />
      <button className={styles.button}>
        add new item
      </button>
    </form>
  </div>
);

export default Form;