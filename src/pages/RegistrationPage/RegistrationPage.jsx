import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";

function RegistrationPage() {
  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
