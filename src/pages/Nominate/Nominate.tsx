import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import Main from '../../layouts/Main';
import Button from '../../components/Button';
import { nominateValidation } from '../../validators';

const INIT_VALUES = {
  email: '',
  description: '',
  involvement: 0,
  talent: 0,
};

const Nominate = () => (
  <Main>
    <section>
      <h1>Nominate a candidate</h1>
      <Formik
        initialValues={INIT_VALUES}
        validationSchema={nominateValidation()}
        onSubmit={() => console.log('submit')}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="description">description</label>
              <Field as="textarea" name="description" id="description" cols={30} rows={10} />
              <ErrorMessage name="description" component="div" />
            </div>
            <div>
              <label htmlFor="involvement">involvement</label>
              <Field type="range" name="involvement" id="involvement" step={1} min={0} max={10} />
              <ErrorMessage name="involvement" component="div" />
            </div>
            <div>
              <label htmlFor="talent">talent</label>
              <Field type="range" name="talent" id="talent" step={1} min={0} max={10} />
              <ErrorMessage name="talent" component="div" />
            </div>
            <Button type="submit" theme="primary" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  </Main>
);

export default Nominate;
