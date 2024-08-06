import { EnvelopeIcon, IdentificationIcon, PhoneArrowDownLeftIcon, PhoneIcon, UserCircleIcon } from '@heroicons/react/24/outline';
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
          
        </div>
      </div>
      <div className="h-full bg-gray-200 px-6 py-10 lg:px-8 ">
        
        <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700">
        <StatusOrder status={order.status} date_expiration={order.date_expiration} link={order.url_payment} />

          <div className="mx-auto flex flex-col space-x-0 space-y-5 rounded-lg bg-white px-6 py-16 shadow-lg md:flex-row md:space-x-5 md:space-y-0">
            <div className="w-full md:basis-1/2">
              <h2 className="mb-4 text-xl font-semibold">Detalles de cliente</h2>
              {[
                { label: 'Nombre', value: order.client.firstname ,icon:UserCircleIcon},
                { label: 'Apellido', value: order.client.lastname ,icon:UserCircleIcon},
                { label: 'Correo', value: order.client.email,icon:EnvelopeIcon},
                { label: 'Documento', value: order.client.document ,icon:IdentificationIcon},
                { label: 'Teléfono', value: order.client.phone ,icon:PhoneIcon},
              ].map(({ label, value , icon:Icon}) => (
                <div className="mb-2 flex items-center justify-between px-5 bg-gray-50 py-1 rounded-md" key={label}>
                  <div className="text-gray-500">
                    <Icon className="h-6 w-6 mr-2 inline-block" />
                    {label}</div>
                  <div className="text-gray-800">{value}</div>

                </div>
              ))}
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