import Image from 'next/image';
import ComplaintsBookFormComponent from './components/FormBook';
import Link from 'next/link';

export default function BookPage() {
  return (
    <div className="px-6 py-32 lg:px-8">
      <div className="mt-0 bg-gray-50 sm:mt-20 lg:mt-0">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Header */}
          <header className="bg-pri px-6 py-8 text-center text-white">
            <div className="mx-auto flex w-full justify-center">
              <Image
                src="/imgs/libro.png"
                width={300}
                height={300}
                alt="Libro de Reclamaciones"
                className="rounded-lg"
              />
            </div>
            <h1 className="text-3xl font-bold">Libro de Reclamaciones</h1>
            <p className="mt-1 text-sm">Inmobiliaria Huertas Grupo Inv. S.R.L.</p>
            <p className="text-sm">
              Calle Luis Espejo 1097 Int. 802, distrito de La Victoria. Telf. 01-23456789
            </p>
          </header>

          {/* Main Content */}
          <main className="p-6 lg:p-8">
            {/* Introductory Text */}
            <section className="mb-8">
              <h2 className="mb-2 text-xl font-semibold">Hoja de Reclamo</h2>
              <p className="text-gray-600">
                A fin de brindar la atención a la brevedad, agradeceremos llenar la totalidad de
                datos solicitados. En caso de menores de edad, se deberá colocar los datos de su
                apoderado.
              </p>
            </section>

            {/* Form Section */}
            <section>
              <ComplaintsBookFormComponent />
            </section>

            {/* Key Definitions */}
            <section className="mt-10">
              <h3 className="font-semibold">
                Conceptos clave a efecto de realizar su reclamo o queja:
              </h3>
              <ul className="mt-2 list-disc pl-6 text-sm text-gray-600">
                <li>
                  <span className="font-semibold">RECLAMO:</span> Disconformidad relacionada a los
                  bienes expedidos o suministrados o a los servicios prestados.
                </li>
                <li>
                  <span className="font-semibold">QUEJA:</span> Disconformidad no relacionada a los
                  productos o servicios; o, malestar o descontento respecto a la atención al
                  público, sin que tenga por finalidad la obtención de un pronunciamiento por parte
                  del proveedor.
                </li>
              </ul>
            </section>

            {/* Important Information */}
            <section className="mt-10">
              <h3 className="font-semibold">Información importante:</h3>
              <ol className="mt-2 list-decimal pl-6 text-sm text-gray-600">
                <li>
                  De acuerdo con lo establecido en la Ley N° 29733, Ley de Protección de Datos
                  Personales y su reglamento, usted al haber proporcionado sus datos personales
                  mediante el Libro de Reclamaciones virtual ha expresado automáticamente su
                  consentimiento para la incorporación de sus datos personales en un banco de datos
                  cuyo titular es nuestra empresa. Para más información, consulte nuestra{' '}
                  <Link href="/politica-de-privacidad" className="text-blue-600 underline">
                    Política de Privacidad.
                  </Link>
                </li>
                <li>
                  La realización del reclamo o queja mediante esta hoja no lo convierte en el único
                  medio de solución de controversias. Puede efectuar la denuncia respectiva ante el
                  INDECOPI de forma indistinta.
                </li>
                <li>
                  El plazo de respuesta se ajustará a lo establecido en la Ley N° 29571 y
                  modificatorias.
                </li>
                <li>
                  La respuesta a la presente queja o reclamo será enviada al correo electrónico
                  consignado en el formulario.
                </li>
              </ol>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
