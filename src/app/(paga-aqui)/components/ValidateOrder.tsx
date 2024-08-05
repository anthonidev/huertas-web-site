import PaymentSummary from './form/PaymentSummary';
import StatusOrder from './StatusOrder';

type Props = {
  order: ResponsePayHere;
};

const ValidateOrder = ({ order }: Props) => {
    
  return (
    <div
      id="featured"
      className="flex min-h-screen flex-col justify-center bg-pattern bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <div className="px-6 pb-20 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700">
          <h1 className="text-2xl font-bold text-pri md:text-4xl">Orden de pago</h1>
          <p>¡Tu orden de pago ha sido generada!</p>
          
          <StatusOrder status={order.status} date_expiration={order.date_expiration} link={order.url_payment} />
        </div>
      </div>
      <div className="h-full bg-gray-200 px-6 py-10 lg:px-8 ">
        <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700">
          <div className="mx-auto flex flex-col space-x-0 space-y-5 rounded-lg bg-white px-6 py-16 shadow-md md:flex-row md:space-x-5 md:space-y-0">
            <div className="w-full md:basis-1/2">
              <h2 className="mb-4 text-xl font-semibold">Detalles de cliente</h2>
              <div className="mb-4 flex items-center justify-between">
                <div className="text-gray-500">Nombre</div>
                <div className="text-gray-500">{order.client.firstname}</div>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div className="text-gray-500">Apellido</div>
                <div className="text-gray-500">{order.client.lastname}</div>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div className="text-gray-500">Correo</div>
                <div className="text-gray-500">{order.client.email}</div>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div className="text-gray-500">Documento</div>
                <div className="text-gray-500">{order.client.document}</div>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div className="text-gray-500">Teléfono</div>
                <div className="text-gray-500">{order.client.phone}</div>
              </div>
            </div>
            <div className="w-full md:basis-1/2">
              <PaymentSummary  amount={order.amount.toString()} loading={false} status={order.status} currency={order.currency} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidateOrder;
