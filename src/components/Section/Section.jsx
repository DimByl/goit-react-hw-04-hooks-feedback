import PropTypes from "prop-types";
import styles from "./Section.module.scss"

const Section = ({ title, children }) => (
  <section className={styles.Section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;