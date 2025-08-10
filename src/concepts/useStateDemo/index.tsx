import { useState } from 'react';
import BackButton from '../../shared/BackButton';

export default function UseStateDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <BackButton />
      <h2>useState Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
