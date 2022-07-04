import { Formik } from 'formik';
import { toast } from 'react-toastify';
import Main from '../../layouts/Main';
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

const Nominate = () => (
  <Main>
    <section className={style.container}>
      <h1 className={style.header}>Nominate a candidate</h1>
      <Formik
        initialValues={INIT_VALUES}
        validationSchema={nominateValidation()}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await api.nominate({
              email: values.email,
              description: values.description,
              score: { involvement: values.involvement, talent: values.talent },
            });
          } catch (error) {
            toast('Error saving nominations', {
              type: 'error',
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values }) => (
          <Form values={values} isSubmitting={isSubmitting} />
        )}
      </Formik>
    </section>
  </Main>
);

export default Nominate;
