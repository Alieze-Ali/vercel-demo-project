// components/SubjectLine.js
import styles from "../components/Answer.module.css";

const SubjectLine = ({ subject }) => (
    <h4 className={styles.subjectLine}>
      <strong>Subject:</strong> {subject}
    </h4>
  );
  
  export default SubjectLine;
  