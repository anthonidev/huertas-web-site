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
    (field: 'department' | 'province' | 'district') =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (field === 'province') {
        setValue('district', '');
      }

      if (field === 'department') {
        setValue('province', '');
        setValue('district', '');
      }

      setValue(`${field}`, e.target.value);
    };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Input
        label="Nombres"
        variant="underlined"
        isRequired
        isInvalid={!!errors.firstname}
        errorMessage={errors.firstname?.message}
        {...register('firstname', {
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
        isInvalid={!!errors.lastname}
        errorMessage={errors.lastname?.message}
        {...register('lastname', {
          required: 'Este campo es obligatorio',
          pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: 'Solo se permiten letras',
          },
        })}
      />

      <Input
        label="Correo electrónico"
        variant="underlined"
        isRequired
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        {...register('email', {
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
        isInvalid={!!errors.phone}
        maxLength={9}
        errorMessage={errors.phone?.message}
        {...register('phone', {
          required: 'Este campo es obligatorio',
          minLength: { value: 9, message: 'Debe tener 9 dígitos' },
          maxLength: { value: 9, message: 'Debe tener 9 dígitos' },
        })}
        onKeyDown={(e) => onlyNumber(e)}
      />

      <Input
        label="Monto a pagar"
        variant="underlined"
        isRequired
        isInvalid={!!errors.amount}
        errorMessage={errors.amount?.message}
        {...register('amount', {
          required: 'Este campo es obligatorio',
          min: { value: 5000, message: 'El monto mínimo es 5000' },
          max: { value: 32000, message: 'El monto máximo es 32000' },
        })}
        min={5000}
        defaultValue={'5000'}
        type="number"
        startContent={
          <div className="text-gray-500">
            <span>$</span>
          </div>
        }
      />

      {renderSelect(
        departments,
        'Departamento',
        watch('department'),
        handleSelect('department'),
        'Selecciona un departamento',
      )}

      {watch('department') &&
        renderSelect(
          getProvinces(watch('department')),
          'Provincia',
          watch('province'),
          handleSelect('province'),
        )}

      {watch('province') &&
        renderSelect(
          getDistricts(watch('province')),
          'Distrito',
          watch('district'),
          handleSelect('district'),
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
