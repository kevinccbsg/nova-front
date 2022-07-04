import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

const Nominate = () => (
  <section>
    <Formik
      initialValues={{
        email: '',
        description: '',
        involvement: 0,
        talent: 0,
      }}
      onSubmit={() => console.log('submit')}
    >
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
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label htmlFor="talent">talent</label>
          <Field type="range" name="talent" id="talent" step={1} min={0} max={10} />
          <ErrorMessage name="email" component="div" />
        </div>
      </Form>
    </Formik>
  </section>
);

export default Nominate;
