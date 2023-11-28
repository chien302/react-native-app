import * as yup from 'yup';

export const initSchema = {
  email: '',
  password: '',
};

export const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email không được để trống')
    .email('Vui lòng nhập đúng email'),
  password: yup
    .string()
    .required('Mật khẩu không được để trống')
    .min(8, 'Mật khẩu có tối thiểu 8 kí tự'),
});
