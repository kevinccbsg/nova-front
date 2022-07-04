import * as Yup from 'yup';

interface ErrorMessages {
  required: string
  min: string
  max: string
  email: string
}

const nominateValidation = ({
  required,
  min,
  max,
  email,
}: ErrorMessages) => (
  Yup.object({
    email: Yup.string().email(email).required(required),
    description: Yup.string()
      .required(required),
    involvement: Yup.number()
      .min(0, min)
      .max(10, max)
      .required(required),
    talent: Yup.number()
      .min(0, min)
      .max(10, max)
      .required(required),
  })
);

// eslint-disable-next-line import/prefer-default-export
export { nominateValidation };
