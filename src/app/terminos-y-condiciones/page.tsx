import { Metadata } from 'next';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Huertas Inmobiliaria - Términos y Condiciones',
  description:
    'En huertas inmobiliaria tenemos los mejores proyectos tanto en campo como en playa',
};

export default function TermPage() {
  return (
    <main className='bg-white px-6 py-32 lg:px-8'>
      <div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
        <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Términos y Condiciones
        </h1>

        <div className='mt-10 max-w-2xl'>
          <p className=''>PROMOCIONES NO ACUMULABLES</p>
          <p className=''>PROMOCIONES REGULARES DEL MES DE FEBRERO</p>
          <h2 className='title_seccion'>EL OLIVAR</h2>
          <h2 className='subtitle_text'>LOTES DESDE S/17,999</h2>
          <p className='text'>
            * El precio del lote desde S/.17,999 es sí la compra del lote en el
            proyecto El Olivar se realiza al contado. El lote está ubicado en la
            4ta etapa del proyecto. Válido para clientes que realicen la compra
            dentro del tiempo establecido. Stock de 20 unidades y son válidas
            del 1 al 28 de febrero del 2024.
          </p>

          <h2 className='subtitle_text'>
            LOTES CON CUOTA INICIAL DESDE S/6,999
          </h2>
          <p className='text'>
            * La cuota inicial desde S/6,999 es con previa coordinación y sin
            descuento. Aplica para compra del lote financiado. Válido para
            clientes que compren su lote dentro del tiempo establecido. Stock de
            20 unidades y son válidas del 1 al 28 de febrero del 2024.
          </p>
          <h2 className='title_seccion'>OASIS</h2>
          <h2 className='subtitle_text'>LOTES DESDE S/42,999</h2>

          <p className='text'>
            * El precio del lote desde S/.42,999 es sí la compra del lote en el
            proyecto Oasis se realiza al contado. El lote está ubicado en la 2da
            etapa del proyecto. Válido para clientes que realicen la compra
            dentro del tiempo establecido. Stock de 10 unidades y son válidas
            del 1 al 28 de febrero del 2024.
          </p>
          <h2 className='subtitle_text'>
            LOTES CON CUOTA INICIAL DESDE S/9,999
          </h2>
          <p className='text'>
            * La cuota inicial desde S/9,999 es con previa coordinación y sin
            descuento. Aplica para compra del lote financiado. Válido para
            clientes que compren su lote dentro del tiempo establecido. Stock de
            10 unidades y son válidas del 1 al 28 de febrero del 2024.
          </p>
          <h2 className='title_seccion'>APOLO</h2>
          <h2 className='subtitle_text'>LOTES DESDE US$ 39,999</h2>
          <p className='text'>
            * El precio del lote desde US$ 39,999 es sí la compra del lote en el
            proyecto Apolo se realiza al contado. Válido para clientes que
            realicen la compra dentro del tiempo establecido. Stock de 10
            unidades y son válidas del 1 al 28 de febrero del 2024.
          </p>
          <h2 className='subtitle_text'>
            LOTES CON CUOTA INICIAL DESDE US$ 5,999
          </h2>
          <p className='text'>
            * La cuota inicial desde US$ 5,999 es con previa coordinación y sin
            descuento. Aplica para compra del lote financiado. Válido para
            clientes que compren su lote dentro del tiempo establecido. Stock de
            10 unidades y son válidas del 1 al 28 de febrero del 2024.
          </p>
        </div>
      </div>
    </main>
  );
}
