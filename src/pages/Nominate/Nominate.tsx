import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Main from '../../layouts/Main';
import { ROUTES } from '../../constants';
import { nominateValidation } from '../../validators';
import Form from './Form';
import style from './Nominate.module.scss';
import * as api from '../../repository/api';

const INIT_VALUES = {
  email: '',
  description: '',
  involvement: 0,
  talent: 0,
};

const Nominate = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Main>
      <section className={style.container}>
        <h1 className={style.header}>{t('nominate.title', 'Nominate a candidate')}</h1>
        <Formik
          initialValues={INIT_VALUES}
          validationSchema={nominateValidation({
            required: t('nominate.error.required', 'Required'),
            min: t('nominate.error.min', 'Min value must be 0'),
            max: t('nominate.error.max', 'Max value must be 10'),
            email: t('nominate.error.email', 'Invalid email'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            api.nominate({
              email: values.email,
              description: values.description,
              score: { involvement: values.involvement, talent: values.talent },
            })
              .then(() => navigate(ROUTES.NOMINATIONS))
              .catch(() => (
                toast(t('nominate.errorSaving', 'Error saving your nomination'), {
                  type: 'error',
                })
              ))
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting, values }) => (
            <Form values={values} isSubmitting={isSubmitting} />
          )}
        </Formik>
      </section>
    </Main>
  );
};

export default Nominate;
