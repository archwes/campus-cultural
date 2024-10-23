import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password')
});

export const signupValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Senha de confirmação deve ser idêntica.')
    .required('Senha de confirmação necessária.')
});

export const passwordResetSchema = Yup.object().shape({
  email: Yup.string()
    .required('Insira um e-mail já registrado')
    .label('Email')
    .email('Insira um e-mail válido')
});
