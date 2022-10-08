import React, { useContext } from 'react';
import classes from './Card.module.css';

import PageContext from '../../store/page-context';

const Card = (props) => {
  const pageCtx = useContext(PageContext)
  console.log(pageCtx)

  return (
      <div className={`${classes['card-underground']} ${props.className}`}
      >{props.children}
      </div>
  )
}

export default Card