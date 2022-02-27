import React from 'react';
import { ImSpinner9 } from "react-icons/im";
import styles from "../../styles/Spinner.module.css";

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <ImSpinner9 className={styles.spinning} size={50} />
        </div>
    )
}

export default Spinner;