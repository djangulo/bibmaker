import React from 'react';

import { Button, Icon } from 'semantic-ui-react';

const SemanticButton = ({ text, icon, onClick, ...rest }) => (
  <Button
    icon={icon ? true : false}
    onClick={onClick}
    aria-label={text ? text : null}
    {...rest}
  >
    <Icon name={icon} />
    {text ? text : null}
  </Button>
);

export default SemanticButton;
