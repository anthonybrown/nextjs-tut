'use client';

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center w-[100px]'>
      <p className='text-5xl mb-4'>{count}</p>
      <button
        className='bg-blue-500 text-white py-2 px-4'
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
    </div>
  );
}

export default Counter;
