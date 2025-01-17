import { GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Huertas Inmobiliaria - Política de Privacidad',
  description: 'En huertas inmobiliaria tenemos los mejores proyectos tanto en campo como en playa',
};

export default function PrivacityPage() {
  return (
    <main className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-lg bg-white shadow-sm">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">
            Políticas de privacidad – Inmobiliaria Huertas Grupo Inv. S.R.L.
          </h1>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">
              I. Identificación de la empresa
            </h2>
            <p className="leading-relaxed text-gray-600">
              Inmobiliaria Huertas Grupo Inv. S.R.L. identificado con RUC N° 20601000939, con
              domicilio en Calle Luis Espejo 1097 Int. 802, distrito de La Victoria, provincia y
              departamento de Lima, en adelante Huertas Inmobiliaria, hace de conocimiento del
              público el presente sitio web y las políticas de privacidad y protección de datos
              personales a ser detalladas en el presente documento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">II. Propósito</h2>
            <p className="leading-relaxed text-gray-600">
              Huertas Inmobiliaria con el objetivo de promocionar, comercializar y/o dar información
              acerca de sus productos y servicios ha ideado, conceptualizado y producido el presente
              sitio web a partir del cual pueda en forma adicional crear un espacio de contacto con
              sus clientes. No obstante, es importante denotar nuestra preocupación por la
              protección de datos personales de nuestros clientes, motivo por el cual comunicamos la
              presente Política de Privacidad. Ello, con la finalidad de hacer de su conocimiento
              los procedimientos mediante los cuales captamos sus datos personales y el tratamiento
              de estos, haciendo presente además la capacidad de cada cliente de tomar acción
              respecto de sus datos personales, ya sea mediante la solicitud de actualización,
              rectificación, inclusión, supresión o cancelación según estime conveniente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">III. Legislación aplicable</h2>
            <div className="leading-relaxed text-gray-600">
              <p className="mb-2">
                La presente política de privacidad ha sido desarrollada de conformidad con:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Ley N° 29733, Ley de Protección de Datos Personales y normas modificatorias.
                </li>
                <li>
                  Decreto Supremo N° 003-2013-JUS, que aprueba el Reglamento de la Ley N° 29733
                </li>
                <li>
                  Directiva de Seguridad de la Información, vigente a partir de la aprobación de la
                  Resolución Directoral N° 019-2013-JUS/DGPDP.
                </li>
                <li>
                  Directiva para el Tratamiento de datos personales mediante Sistemas de
                  Videovigilancia, vigente a partir de la aprobación de la Resolución Directoral N°
                  02-2020-JUS/DGTAIPD.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">
              IV. Finalidades necesarias del tratamiento de datos personales
            </h2>
            <div className="leading-relaxed text-gray-600">
              <p className="mb-2">
                Inmobiliaria Huertas, mediante su equipo multidisciplinario realiza el tratamiento
                de sus datos personales de acuerdo a las siguientes finalidades necesarias que
                permiten llevar adelante nuestros servicios y actividades comerciales:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Identificación del cliente mediante la validación de su documento nacional de
                  identidad (DNI).
                </li>
                <li>
                  Envío de cotizaciones y/o promoción comercial de los productos y servicios de la
                  inmobiliaria.
                </li>
                <li>
                  Formalización de contratos por adquisición de productos y/o servicios de
                  Inmobiliaria Huertas.
                </li>
                <li>
                  Envío de estados de cuenta, comunicaciones de cobranza, comunicaciones de
                  respuesta a solicitudes y/o reclamos.
                </li>
                <li>
                  Gestión de cartera de clientes, evaluación de morosidad y riesgos respectivamente.
                </li>
                <li>
                  Prevención y detección de fraudes y/o actividades delictivas de suplantación de
                  identidad u otras actividades ilícitas.
                </li>
                <li>
                  Compartir datos con empresas proveedoras de servicios para el cumplimiento
                  adecuado de las prestaciones.
                </li>
                <li>
                  Uso de servicios en nube como Alphabet Inc. para almacenar, procesar y analizar
                  información.
                </li>
                <li>Uso de cámaras de videovigilancia para garantizar la seguridad.</li>
                <li>
                  Gestión del cumplimiento de obligaciones legales ante entidades públicas y
                  privadas.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">
              V. Finalidades opcionales de tratamiento de datos personales
            </h2>
            <div className="leading-relaxed text-gray-600">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Realización de estudios de marketing, segmentación de clientes, análisis comercial
                  y envío de material publicitario.
                </li>
                <li>
                  Compartir datos personales con empresas relacionadas y/o socios comerciales del
                  grupo económico.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">
              VI. Datos personales obligatorios
            </h2>
            <div className="leading-relaxed text-gray-600">
              <p className="mb-2">Es obligatorio proporcionar los siguientes datos personales:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Datos de identificación: Nombres, apellidos, DNI, Pasaporte, RUC, dirección,
                  teléfono, correo electrónico, voz, imagen, firma.
                </li>
                <li>
                  Datos de características personales: Estado civil, fecha de nacimiento,
                  nacionalidad, sexo, edad y profesión.
                </li>
                <li>
                  Datos económico-financieros: Datos bancarios, créditos, préstamos, avales, bienes
                  patrimoniales, hipotecas.
                </li>
                <li>Datos de carácter social: Características de la vivienda.</li>
                <li>Datos sensibles: Ingresos económicos y datos biométricos.</li>
                <li>Datos de menores de edad: Solo con consentimiento de padres o tutores.</li>
                <li>
                  Datos de red y uso del servicio: Dirección IP, IMSI, logs, sesiones y actividades.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">
              VII. Destinatarios necesarios
            </h2>
            <div className="leading-relaxed text-gray-600">
              <p className="mb-2">Los datos pueden ser tratados por:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Autoridades nacionales y centrales de riesgo</li>
                <li>Servicios de gestión de pago electrónico (VISA, MASTERCARD, NIUBIZ)</li>
                <li>Proveedores de hosting</li>
                <li>Proveedores de servicio de mensajería</li>
                <li>Proveedores de servicio de contact center</li>
                <li>Proveedores de servicios de consultoría</li>
                <li>Proveedores de servicio de custodia documental</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">VIII. Banco de Datos</h2>
            <p className="leading-relaxed text-gray-600">
              La información será almacenada en el banco de datos Clientes y Videovigilancia,
              inscritos en el Registro Nacional de Protección de Datos Personales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">
              IX. Plazo de almacenamiento
            </h2>
            <p className="leading-relaxed text-gray-600">
              Los datos serán conservados según la Ley de Protección de Datos Personales y su
              reglamento, considerando la finalidad de uso o hasta la revocación del consentimiento
              para tratamientos opcionales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">
              X. Ejercicio de los derechos ARCO
            </h2>
            <p className="leading-relaxed text-gray-600">
              Puede ejercer los derechos de acceso, rectificación, cancelación y oposición, así como
              revocar su consentimiento, escribiendo a:
              <a
                href="mailto:datospersonales@inmobiliariahuertas.com"
                className="ml-1 text-blue-600 hover:text-blue-800"
              >
                datospersonales@inmobiliariahuertas.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">XI. Información Adicional</h2>
            <p className="leading-relaxed text-gray-600">
              Inmobiliaria Huertas se reserva el derecho a modificar esta Política de Privacidad en
              cualquier momento, lo cual se comunicará a través de la página web, redes sociales u
              otros medios pertinentes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">XIII. Anexos</h2>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              <li>Anexo I: Lista de Empresas del Grupo Huertas y socios comerciales</li>
              <li>Anexo II: Lista de Proveedores</li>
              <li>
                Anexo III: Hoja Informativa sobre el tratamiento de datos personales mediante
                Sistemas de Videovigilancia
              </li>
            </ul>
          </section>

          <footer className="mt-8 border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-500">
              Para consultas sobre esta política de privacidad, contáctenos en:
              <a
                href="mailto:políticadeprivacidad@huertasinmobiliaria.com"
                className="ml-1 text-blue-600 hover:text-blue-800"
              >
                políticadeprivacidad@huertasinmobiliaria.com
              </a>
            </p>
          </footer>
        </div>
      </div>
      <GoogleTagManager gtmId="GTM-MH9WCJSW" />
    </main>
  );
}
