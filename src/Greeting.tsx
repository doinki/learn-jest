import { FC } from 'react';

interface GreetingProps {
  username: string;
}

const Greeting: FC<GreetingProps> = ({ username }) => {
  return <h1>Hello, {username}</h1>;
};

export default Greeting;
