import type { NextPage } from 'next';

import { SwapTokenCard } from '../features/swap/SwapTokenCard';

const Home: NextPage = () => {
  return (
    <div className="pt-4 sm:pt-8 space-y-3">
      <SwapTokenCard />
    </div>
  );
};

export default Home;
