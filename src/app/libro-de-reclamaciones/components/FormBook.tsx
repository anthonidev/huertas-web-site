'use client';

import useComplaintsBookStore from '@/context/bookl-store';
import { ComplaintsBookForm, complaintsBookFormSchema } from '@/lib/interface/book';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { SubmitHandler, useForm } from 'react-hook-form';

const ComplaintsBookFormComponent = () => {
  const {
    register,
    handleSubmit,
    reset, // Para limpiar campos
    formState: { errors },
  } = useForm<ComplaintsBookForm>({
    resolver: yupResolver(complaintsBookFormSchema),
  });

  const { loading, createComplaintsBook } = useComplaintsBookStore();

  const onSubmit: SubmitHandler<ComplaintsBookForm> = async (data) => {
    const res = await createComplaintsBook(data);

    if (res) {
      reset({
        apellidoMaterno: '',
        apellidoPaterno: '',
        descripcion: '',
        detalle: '',
        documentoIdentidad: '',
        domicilio: '',
        email: '',
        importeMonto: 0,
        nombres: '',
        pedidoReclamo: '',
        telefono: '',
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-6 px-8 py-5 sm:grid-cols-2"
    >
      {/* Nombres */}
      <div className="col-span-1">
        <Input
          label="Nombres"
          {...register('nombres')}
          labelPlacement="outside"
          fullWidth
          isInvalid={!!errors.nombres}
          errorMessage={errors.nombres?.message}
        />
      </div>

      {/* Apellido Paterno */}
      <div className="col-span-1">
        <Input
          label="Apellido Paterno"
          {...register('apellidoPaterno')}
          labelPlacement="outside"
          fullWidth
          isInvalid={!!errors.apellidoPaterno}
          errorMessage={errors.apellidoPaterno?.message}
        />
      </div>

      {/* Apellido Materno */}
      <div className="col-span-1">
        <Input
          label="Apellido Materno"
          {...register('apellidoMaterno')}
          labelPlacement="outside"
          fullWidth
          isInvalid={!!errors.apellidoMaterno}
          errorMessage={errors.apellidoMaterno?.message}
        />
      </div>

      {/* Domicilio */}
      <div className="col-span-1">
        <Input
          label="Domicilio"
          {...register('domicilio')}
          labelPlacement="outside"
          fullWidth
          isInvalid={!!errors.domicilio}
          errorMessage={errors.domicilio?.message}
        />
      </div>

      {/* Documento de Identidad */}
      <div className="col-span-1">
        <Input
          label="Documento de Identidad"
          {...register('documentoIdentidad')}
          labelPlacement="outside"
          fullWidth
          isInvalid={!!errors.documentoIdentidad}
          errorMessage={errors.documentoIdentidad?.message}
        />
      </div>

      {/* Teléfono */}
      <div className="col-span-1">
        <Input
          label="Teléfono"
          {...register('telefono')}
          labelPlacement="outside"
          fullWidth
          isInvalid={!!errors.telefono}
          errorMessage={errors.telefono?.message}
        />
      </div>

      {/* Correo */}
      <div className="col-span-1">
        <Input
          label="Correo"
          {...register('email')}
          labelPlacement="outside"
          fullWidth
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
        />
      </div>

      {/* Área de Reclamo */}
      <div className="col-span-1">
        <Select
          items={[
            { label: 'Telemarketing', value: 'Telemarketing' },
            { label: 'Sala de Venta', value: 'Sala de Venta' },
            { label: 'Postventa', value: 'Postventa' },
            { label: 'Otros', value: 'Otros' },
          ]}
          label="Área de Reclamo"
          labelPlacement="outside"
          placeholder="Selecciona un área de reclamo"
          {...register('areaReclamo')}
          isInvalid={!!errors.areaReclamo}
          errorMessage={errors.areaReclamo?.message}
        >
          {(type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          )}
        </Select>
      </div>

      {/* Tipo de Pedido */}
      <div className="col-span-1">
        <Select
          items={[
            { label: 'Reclamo', value: 'Reclamo' },
            { label: 'Queja', value: 'Queja' },
          ]}
          label="Tipo de Pedido"
          labelPlacement="outside"
          placeholder="Selecciona un tipo de pedido"
          {...register('tipoPedido')}
          isInvalid={!!errors.tipoPedido}
          errorMessage={errors.tipoPedido?.message}
        >
          {(type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          )}
        </Select>
      </div>
      {/* Importe */}
      <div className="col-span-1">
        <Input
          label="Importe"
          {...register('importeMonto')}
          labelPlacement="outside"
          defaultValue={'0'}
          fullWidth
          isInvalid={!!errors.importeMonto}
          errorMessage={errors.importeMonto?.message}
        />
      </div>

      {/* Descripción */}
      <div className="col-span-1 sm:col-span-2">
        <Textarea
          label="Descripción"
          {...register('descripcion')}
          labelPlacement="outside"
          fullWidth
          isInvalid={!!errors.descripcion}
          errorMessage={errors.descripcion?.message}
        />
      </div>

      {/* Tipo de pedido */}
      <div className="col-span-1">
        <Select
          items={[
            { label: 'Producto', value: 'Producto' },
            { label: 'Servicio', value: 'Servicio' },
          ]}
          label="Tipo de Bien"
          labelPlacement="outside"
          placeholder="Selecciona un tipo de bien"
          {...register('tipoBien')}
          isInvalid={!!errors.tipoBien}
          errorMessage={errors.tipoBien?.message}
        >
          {(type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          )}
        </Select>
      </div>

      {/* Detalle */}
      <div className="col-span-1 sm:col-span-2">
        <Textarea
          label="Detalle"
          {...register('detalle')}
          labelPlacement="outside"
          fullWidth
          isInvalid={!!errors.detalle}
          errorMessage={errors.detalle?.message}
        />
      </div>

      {/* Pedido del Reclamo */}
      <div className="col-span-1 sm:col-span-2">
        <Input
          label="Pedido del Reclamo"
          {...register('pedidoReclamo')}
          labelPlacement="outside"
          fullWidth
          isInvalid={!!errors.pedidoReclamo}
          errorMessage={errors.pedidoReclamo?.message}
        />
      </div>

      {/* Botón de Enviar */}
      <div className="col-span-1 sm:col-span-2">
        <Button
          type="submit"
          isLoading={loading}
          isDisabled={loading}
          fullWidth
          size="lg"
          className="bg-pri font-bold text-white"
        >
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default ComplaintsBookFormComponent;
