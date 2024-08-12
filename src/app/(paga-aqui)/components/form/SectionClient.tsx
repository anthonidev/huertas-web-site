import { departments, districts, provinces } from '@/utils/ubigeo';
import { onlyNumber } from '@/utils/validate';
import { Checkbox, Input, Select, SelectItem } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { UseFormRegister, UseFormSetValue, UseFormWatch, FieldErrors } from 'react-hook-form';

type Props = {
  register: UseFormRegister<FormPayHere>;
  watch: UseFormWatch<FormPayHere>;
  setValue: UseFormSetValue<FormPayHere>;
  errors: FieldErrors<FormPayHere>;
};

const SectionClient = ({ register, watch, setValue, errors }: Props) => {
  const renderSelect = (
    items: any[],
    label: string,
    value: string,
    onChange: any,
    placeholder?: string,
  ) => (
    <Select
      isRequired
      items={items}
      label={label}
      value={value}
      onChange={onChange}
      defaultSelectedKeys={value ? [value] : undefined}
      variant="underlined"
    >
      {(item) => <SelectItem key={item.id}>{item.name}</SelectItem>}
    </Select>
  );

  const getProvinces = (departmentId: string) =>
    provinces.filter((province) => province.department_id === departmentId);

  const getDistricts = (provinceId: string) =>
    districts.filter((district) => district.province_id === provinceId);

  const handleSelect =
    (field: 'client.department' | 'client.province' | 'client.district') =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (field === 'client.province') {
        setValue('client.district', '');
      }

      if (field === 'client.department') {
        setValue('client.province', '');
        setValue('client.district', '');
      }

      setValue(`${field}`, e.target.value);
    };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Input
        label="Nombres"
        variant="underlined"
        isRequired
        isInvalid={!!errors.client?.firstname}
        errorMessage={errors.client?.firstname?.message}
        {...register('client.firstname', {
          required: 'Este campo es obligatorio',
          pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: 'Solo se permiten letras',
          },
        })}
      />
      <Input
        label="Apellidos"
        variant="underlined"
        isRequired
        isInvalid={!!errors.client?.lastname}
        errorMessage={errors.client?.lastname?.message}
        {...register('client.lastname', {
          required: 'Este campo es obligatorio',
          pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: 'Solo se permiten letras',
          },
        })}
      />
      <Input
        label="DNI"
        variant="underlined"
        isRequired
        isInvalid={!!errors.client?.document}
        errorMessage={errors.client?.document?.message}
        {...register('client.document', {
          required: 'Este campo es obligatorio',
          minLength: { value: 8, message: 'Debe tener 8 dígitos' },
          maxLength: { value: 8, message: 'Debe tener 8 dígitos' },
        })}
        onKeyDown={(e) => onlyNumber(e)}
        maxLength={8}
      />

      <Input
        label="Correo electrónico"
        variant="underlined"
        isRequired
        isInvalid={!!errors?.client?.email}
        errorMessage={errors?.client?.email?.message}
        {...register('client.email', {
          required: 'Este campo es obligatorio',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Ingrese un correo válido',
          },
        })}
      />

      <Input
        label="Teléfono"
        variant="underlined"
        isRequired
        isInvalid={!!errors?.client?.phone}
        maxLength={9}
        errorMessage={errors?.client?.phone?.message}
        {...register('client.phone', {
          required: 'Este campo es obligatorio',
          minLength: { value: 9, message: 'Debe tener 9 dígitos' },
          maxLength: { value: 9, message: 'Debe tener 9 dígitos' },
        })}
        onKeyDown={(e) => onlyNumber(e)}
      />
      <Select
        isRequired
        label="Tipo de moneda"
        variant="underlined"
        {...register('currency', {
          required: 'Este campo es obligatorio',
        })}
        defaultSelectedKeys={['USD']}
      >
        <SelectItem key="PEN" value="PEN">
          Soles
        </SelectItem>
        <SelectItem key="USD" value="USD">
          Dólares
        </SelectItem>
      </Select>

      <Input
        label="Monto a pagar"
        variant="underlined"
        isRequired
        isInvalid={!!errors.amount}
        errorMessage={errors.amount?.message}
        {...register('amount', {
          required: 'Este campo es obligatorio',
          min: { value: 10, message: 'El monto mínimo es 10' },
          pattern: {
            value: /^(?!0\d)(?!.*\.\d{3,})\d*(?:\.\d{2})?$/,
            message: 'Solo se permiten números con hasta dos decimales',
          },
        })}
        min={10}
        defaultValue={'100'}
        type="decimal"
        startContent={
          <div className="text-gray-500">{watch('currency') === 'PEN' ? 'S/' : '$'}</div>
        }
      />
      <input type="hidden" {...register('client.country')} value="Perú" />
      <input
        type="hidden"
        {...register('order_id')}
        value={'HUERTAS-ORDER-' + new Date().getTime().toString(36).toUpperCase()}
      />
      <input
        type="hidden"
        {...register('description')}
        value="Orden de pago huertas inmobiliaria"
      />

      {renderSelect(
        departments,
        'Departamento',
        watch('client.department'),
        handleSelect('client.department'),
        'Selecciona un departamento',
      )}

      {watch('client.department') &&
        renderSelect(
          getProvinces(watch('client.department')),
          'Provincia',
          watch('client.province'),
          handleSelect('client.province'),
        )}

      {watch('client.province') &&
        renderSelect(
          getDistricts(watch('client.province')),
          'Distrito',
          watch('client.district'),
          handleSelect('client.district'),
        )}

      <Checkbox
        {...register('policy', {
          required: 'Debe aceptar los términos y condiciones',
        })}
        className="col-span-1 text-gray-500 md:col-span-2"
        isInvalid={!!errors.policy}
      >
        <span className="text-xs md:text-sm">Acepto los </span>
        <Link
          className="text-xs text-blue-500 hover:border-b-2 hover:border-blue-500 md:text-sm"
          href="/terminos-y-condiciones"
          passHref
        >
          términos y condiciones
        </Link>{' '}
        y la{' '}
        <Link
          className="text-xs text-blue-500 hover:border-b-2 hover:border-blue-500 md:text-sm"
          href="/politica-de-privacidad"
          passHref
        >
          política de privacidad
        </Link>{' '}
        <span className="text-xs md:text-sm">de la empresa.</span>
      </Checkbox>
    </div>
  );
};

export default SectionClient;
