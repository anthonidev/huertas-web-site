import LoadingPage from '@/components/shared/LoadingPage';
import { getOrder } from '@/server/actions/payments';
import { Suspense } from 'react';
import ValidateOrder from '../../components/ValidateOrder';
export const dynamic = 'force-dynamic';

interface Props {
  params: { id: string };
}
export default function OrderPage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <DataAsync params={params} />
      </Suspense>
    </>
  );
}

async function DataAsync({ params }: { params: { id: string } }) {
  const order = await getOrder(params.id);
  if (!order) return <>error al obtener proyecto del servidor</>;

  return <ValidateOrder order={order} />;
}
