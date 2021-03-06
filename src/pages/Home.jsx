import styles from "./common.module.css";
import { useSelector } from "react-redux";
import GreetingMessage from "../components/GreetingMessage/GreetingMessage";
import authSelectors from "../redux/auth/auth-selectors";
import background from "../images/background.jpeg";

export default function Home() {
  const AuthenticatedHomePage = (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={styles.greetingContainer}
    >
      <h1 className={styles.greetingTitle}>Your entrance successful</h1>
      <p className={styles.greetingDescr}>
        To get started, go to the
        <span className={styles.greetingSpan}>"contacts"</span> tab
      </p>
    </div>
  );

  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return <div>{isLoggedIn ? AuthenticatedHomePage : <GreetingMessage />}</div>;
}
// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });
// export default connect(mapStateToProps)(Home);
