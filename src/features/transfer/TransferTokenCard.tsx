import { Card } from '../../components/layout/Card';
import { getWarpContext } from '../../context/context';

import { TransferTokenForm } from './TransferTokenForm';

export function TransferTokenCard() {
  return (
    <Card className="w-100 sm:w-[31rem]">
      <>
        <div className="absolute left-0 right-0 -top-36 xs:-top-[6.5rem] flex justify-center overflow-hidden z-10"></div>
        <TransferTokenForm tokenRoutes={getWarpContext().routes} />
      </>
    </Card>
  );
}
