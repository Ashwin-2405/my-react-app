import React from 'react';

type Props = {
  name: string;
};

const WelcomeMessage: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h2>Welcome to CyberGuard, {name}!</h2>
    </div>
  );
};

export default WelcomeMessage;
