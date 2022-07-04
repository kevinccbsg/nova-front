import * as Yup from 'yup';

const nominateValidation = () => (
  Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    description: Yup.string()
      .required('Required'),
    involvement: Yup.number()
      .min(0, 'Must be 10')
      .max(10, 'Must be 10')
      .required('Required'),
    talent: Yup.number()
      .min(0, 'Must be 10')
      .max(10, 'Must be 10')
      .required('Required'),
  })
);

export { nominateValidation };
