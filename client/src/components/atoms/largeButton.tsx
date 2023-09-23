import React, { FunctionComponent } from 'react';

interface OwnProps {    }

type Props = OwnProps;

const largeButton: FunctionComponent<Props> = (props) => {
  return (<Link href="#" className="button primary large">Large</a>);
};

export default largeButton;
