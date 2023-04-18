import React from 'react';
import styles from './Error.module.css';
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"

const Err = ({ errMsg }) => {
    return (
        <div className={styles.errContainer}>
            <span className={styles.content}>
                <ExclamationCircleIcon className={styles.icon} />
                {errMsg}
            </span>
        </div>
    );
};

export default Err;