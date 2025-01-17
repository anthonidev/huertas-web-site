import * as yup from 'yup';

export interface ComplaintsBookForm {
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  domicilio: string;
  documentoIdentidad: string;
  telefono: string;
  email: string;
  areaReclamo: 'Telemarketing' | 'Sala de Venta' | 'Postventa' | 'Otros';
  tipoBien: 'Producto' | 'Servicio';
  importeMonto?: number | null; // Aquí incluimos null
  descripcion: string;
  tipoPedido: 'Reclamo' | 'Queja';
  detalle: string;
  pedidoReclamo: string;
}

export const complaintsBookFormSchema = yup.object({
  nombres: yup
    .string()
    .required('El nombre es obligatorio')
    .min(2, 'Debe tener al menos 2 caracteres'),
  apellidoPaterno: yup
    .string()
    .required('El apellido paterno es obligatorio')
    .min(2, 'Debe tener al menos 2 caracteres'),
  apellidoMaterno: yup
    .string()
    .required('El apellido materno es obligatorio')
    .min(2, 'Debe tener al menos 2 caracteres'),
  domicilio: yup
    .string()
    .required('El domicilio es obligatorio')
    .min(5, 'Debe tener al menos 5 caracteres'),
  documentoIdentidad: yup
    .string()
    .required('El documento de identidad es obligatorio')
    .matches(/^\d+$/, 'Debe contener solo números'),
  telefono: yup
    .string()
    .required('El teléfono es obligatorio')
    .matches(/^\d+$/, 'Debe contener solo números')
    .min(9, 'Debe tener al menos 9 dígitos')
    .max(15, 'Debe tener como máximo 15 dígitos'),
  email: yup.string().email('Debe ser un correo válido').required('El correo es obligatorio'),
  areaReclamo: yup
    .mixed<'Telemarketing' | 'Sala de Venta' | 'Postventa' | 'Otros'>()
    .oneOf(
      ['Telemarketing', 'Sala de Venta', 'Postventa', 'Otros'],
      'Selecciona un área de reclamo válida',
    )
    .required('Selecciona un área de reclamo'),
  tipoBien: yup
    .mixed<'Producto' | 'Servicio'>()
    .oneOf(['Producto', 'Servicio'], 'Selecciona un tipo de bien válido')
    .required('Selecciona un tipo de bien'),
  importeMonto: yup.number().typeError('Debe ser un número válido').nullable().notRequired(),

  descripcion: yup
    .string()
    .required('La descripción es obligatoria')
    .min(10, 'Debe tener al menos 10 caracteres'),
  tipoPedido: yup
    .mixed<'Reclamo' | 'Queja'>()
    .oneOf(['Reclamo', 'Queja'], 'Selecciona un tipo de pedido válido')
    .required('Selecciona un tipo de pedido'),
  detalle: yup
    .string()
    .required('El detalle es obligatorio')
    .min(10, 'Debe tener al menos 10 caracteres'),
  pedidoReclamo: yup
    .string()
    .required('El pedido del reclamo es obligatorio')
    .min(5, 'Debe tener al menos 5 caracteres'),
});
