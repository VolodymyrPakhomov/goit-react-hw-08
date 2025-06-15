import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(login(values));
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
