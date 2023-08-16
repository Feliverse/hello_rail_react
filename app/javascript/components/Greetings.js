import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/greetingsSlice';


const Greeting = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  console.log(messages)
  return (
    <div>
      <h2>Messages:</h2>
      {messages.message}
    </div>
  );
};

export default Greeting;