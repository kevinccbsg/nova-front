import {
  Form, Field, ErrorMessage,
} from 'formik';
import Button from '../../../components/Button';
import { FormProps } from './Form.model';
import style from './Form.module.scss';

const NominateForm = ({ values, isSubmitting }: FormProps) => (
  <Form>
    <div className={style.inputContainer}>
      <label htmlFor="email">email</label>
      <Field
        data-cy="input-email"
        type="email"
        name="email"
        id="email"
      />
      <ErrorMessage
        data-cy="input-error-email" className={style.error} name="email" component="div"
      />
    </div>
    <div className={style.inputContainer}>
      <label htmlFor="description">description</label>
      <Field
        data-cy="input-description"
        as="textarea"
        name="description"
        id="description"
        cols={30}
        rows={10}
      />
      <ErrorMessage
        data-cy="input-error-description" className={style.error} name="description" component="div"
      />
    </div>
    <div className={style.inputContainer}>
      <label htmlFor="involvement">involvement: {values.involvement}</label>
      <Field
        data-cy="input-involvement"
        type="range"
        name="involvement"
        id="involvement"
        step={1}
        min={0}
        max={10}
      />
      <ErrorMessage
        data-cy="input-error-involvement" className={style.error} name="involvement" component="div"
      />
    </div>
    <div className={style.inputContainer}>
      <label htmlFor="talent">talent: {values.talent}</label>
      <Field
        data-cy="input-talent"
        type="range"
        name="talent"
        id="talent"
        step={1}
        min={0}
        max={10}
      />
      <ErrorMessage
        data-cy="input-error-talent" className={style.error} name="talent" component="div"
      />
    </div>
    <div>
      <Button
        data-cy="nominate-submit-button"
        type="submit"
        theme="primary"
        disabled={isSubmitting}
      >
        Nominate
      </Button>
    </div>
  </Form>
);

export default NominateForm;
