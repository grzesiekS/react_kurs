import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./Form.module.scss";
import Title from "../Title/Title";

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Add new twitter account</Title>
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
      <Button>
        add new children
      </Button>
    </form>
  </div>
);

export default Form;
