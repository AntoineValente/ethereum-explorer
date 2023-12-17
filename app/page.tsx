'use client';

import { FC, useState } from 'react';

import { useRouter } from 'next/navigation';

const Home: FC = () => {
  const [value, setValue] = useState('');
  const router = useRouter();

  const onClick = () => {
    router.push(`/address/${value}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
      <h1>Enter your account address</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />

        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default Home;
