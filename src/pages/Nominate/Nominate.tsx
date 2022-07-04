import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import Main from '../../layouts/Main';
import Button from '../../components/Button';
import { nominateValidation } from '../../validators';
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
          } finally {
            setSubmitting(false)
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={style.inputContainer}>
              <label htmlFor="email">email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage className={style.error} name="email" component="div" />
            </div>
            <div className={style.inputContainer}>
              <label htmlFor="description">description</label>
              <Field as="textarea" name="description" id="description" cols={30} rows={10} />
              <ErrorMessage className={style.error} name="description" component="div" />
            </div>
            <div className={style.inputContainer}>
              <label htmlFor="involvement">involvement</label>
              <Field type="range" name="involvement" id="involvement" step={1} min={0} max={10} />
              <ErrorMessage className={style.error} name="involvement" component="div" />
            </div>
            <div className={style.inputContainer}>
              <label htmlFor="talent">talent</label>
              <Field type="range" name="talent" id="talent" step={1} min={0} max={10} />
              <ErrorMessage className={style.error} name="talent" component="div" />
            </div>
            <div>
              <Button type="submit" theme="primary" disabled={isSubmitting}>
                Nominate
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  </Main>
);

export default Nominate;
