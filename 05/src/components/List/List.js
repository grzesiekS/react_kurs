import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

const List = ({items}) => (
  <>
    {items.length
      ?
      (
        <ul className={styles.wrapper}>
          {items.map(item => (
            <ListItem key={item.name} {...item} />
          ))}
        </ul>
      )
      :
      (
        <h1 className={styles.noItems}>There is no items</h1>
      )
    }
  </>
);

export default List;
