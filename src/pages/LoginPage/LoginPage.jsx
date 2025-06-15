import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
