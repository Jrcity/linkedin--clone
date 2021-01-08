import React from 'react';
import WidgetOption from './WidgetOption';

import './Widget.css';

const Widget = () => {
  return (
    <div className={'widget'}>
      <WidgetOption
        title={'Add to your feed'}
        user={'Elon Musk'}
        description={'CEO of Tesla.'}
        src={
          'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'
        }
      />
      <WidgetOption
        user={'Jeff Bezos'}
        description={'CE0 & Founder of Amazon.'}
        src={''}
      />
      <WidgetOption
        user={'Bill Gates'}
        description={'Co-chairs, Bill & Melinda Gates Foundation'}
        src={''}
      />
    </div>
  );
};

export default Widget;
