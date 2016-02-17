import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default (props) => {
  return (<td>
    <Sparklines height={80} width={120} data={props.data}>
      <SparklinesLine color={props.color} />
    </Sparklines>
  </td>
  );
}