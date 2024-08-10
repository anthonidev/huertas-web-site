'use client';
import FormData from '@/components/shared/form/FormData';
import Input2 from '@/components/shared/form/Input2';
import TextArea2 from '@/components/shared/form/TextArea2';
import useMessageStore from '@/context/message-store';
import { onlyLetter, onlyNumber } from '@/utils/validate';
import { Button } from '@nextui-org/react';
import { Fade } from 'react-awesome-reveal';
import { SubmitHandler } from 'react-hook-form';

type Props = {
  project?: string;
  primary_color?: string;
  secondary_color?: string;
  tertiary_color?: string;
};

const Form = ({ project, primary_color, secondary_color, tertiary_color }: Props) => {
  const { loading, sendMessage } = useMessageStore();

  const onSubmit: SubmitHandler<FormContact> = (data, event: any) => {
    sendMessage(data, event, project);
  };
  return (
    <Fade triggerOnce direction="right">
      <FormData<FormContact> onSubmit={onSubmit}>
        {({ register, formState: { errors } }) => (
          <div
            className="rounded-2xl px-10 py-20"
            style={{
              backgroundColor: `${tertiary_color ? tertiary_color : '#D6EAF1'}`,
            }}
          >
            <p
              className="mb-5 text-center text-2xl md:text-3xl lg:text-4xl"
              style={{
                color: `${secondary_color ? secondary_color : '#1E3A8A'}`,
              }}
            >
              Quiero que me contacten
              <span className="font-extrabold"> para mayor información</span>
            </p>
            <p
              className="mb-5 text-center text-sm md:text-lg"
              style={{
                color: `${secondary_color ? secondary_color : '#1E3A8A'}`,
              }}
            >
              Déjanos tus datos y un asesor se contactará contigo lo antes posible
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="col-span-2 md:col-span-1"
                style={{
                  backgroundColor: `${secondary_color ? secondary_color : '#1E3A8A'}`,
                }}
              >
                <Input2
                  title="Nombres "
                  type="text"
                  {...register('firstname', {
                    required: true,
                    maxLength: 120,
                  })}
                  onKeyDown={(e) => onlyLetter(e)}
                  aria-errormessage={errors.firstname ? 'Este campo es requerido' : ''}
                />
              </div>
              <div
                className="col-span-2 md:col-span-1"
                style={{
                  backgroundColor: `${secondary_color ? secondary_color : '#1E3A8A'}`,
                }}
              >
                <Input2
                  title="Apellidos"
                  type="text"
                  {...register('lastname', {
                    required: true,
                    maxLength: 120,
                  })}
                  onKeyDown={(e) => onlyLetter(e)}
                  aria-errormessage={errors.lastname ? 'Este campo es requerido' : ''}
                />
              </div>
              <div
                className="col-span-2 md:col-span-1"
                style={{
                  backgroundColor: `${secondary_color ? secondary_color : '#1E3A8A'}`,
                }}
              >
                <Input2
                  title="Correo electrónico"
                  type="email"
                  {...register('email', {
                    required: true,
                    maxLength: 120,
                  })}
                  aria-errormessage={errors.email ? 'Este campo es requerido' : ''}
                />
              </div>
              <div
                className="col-span-2 md:col-span-1"
                style={{
                  backgroundColor: `${secondary_color ? secondary_color : '#1E3A8A'}`,
                }}
              >
                <Input2
                  title="Número de teléfono"
                  type="text"
                  {...register('phone', {
                    required: true,
                    maxLength: 9,
                  })}
                  minLength={9}
                  maxLength={9}
                  onKeyDown={(e) => onlyNumber(e)}
                  aria-errormessage={errors.phone ? 'Este campo es requerido' : ''}
                />
              </div>

              <div
                className="col-span-2"
                style={{
                  backgroundColor: `${secondary_color ? secondary_color : '#1E3A8A'}`,
                }}
              >
                <TextArea2
                  title="Mensaje"
                  {...register('message', {
                    required: false,
                    maxLength: 500,
                  })}
                />
              </div>
              <button
                // isLoading={loading}
                // isDisabled={loading}
                className="pushable col-span-2 mt-5"
                type="submit"
                disabled={loading}
              >
                <span className="edge"></span>
                <span
                  style={{ background: primary_color }}
                  className="front flex items-center justify-center uppercase text-white"
                >
                  {loading ? 'Enviando...' : 'Solicitar información'}
                </span>
              </button>

              <span className="col-span-2 mb-5 text-center text-xs text-pri md:text-sm">
                Al enviar este formulario, aceptas que los datos que nos proporcionas se utilicen
                para responder a tu consulta.
              </span>
            </div>
          </div>
        )}
      </FormData>
    </Fade>
  );
};

export default Form;
