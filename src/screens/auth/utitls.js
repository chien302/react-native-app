import * as yup from 'yup';

export const initSchemaRegister = {
  phoneNumber: '',
  password: '',
  fullName: '',
  dateOfBirth: '',
};

export const initSchemaLogin = {
  phoneNumber: '',
  password: '',
};

export const schema = yup.object().shape({
  phoneNumber: yup.string().required('SDT không được để trống'),
  password: yup
    .string()
    .required('Mật khẩu không được để trống')
    .min(8, 'Mật khẩu có tối thiểu 8 kí tự'),
});

export const schemaRegister = yup.object().shape({
  phoneNumber: yup.string().required('SĐT không được để trống'),
  fullName: yup.string().required('Họ tên không được để trống'),
  password: yup
    .string()
    .required('Mật khẩu không được để trống')
    .min(8, 'Mật khẩu có tối thiểu 8 kí tự'),
  dateOfBirth: yup.string().required('Ngày sinh không được để trống'),
});
