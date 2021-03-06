import React from "react";

import styles from "./Spinner.module.css";

const Spinner = (props) => {
	return (
		<div className={props.className || ""}>
			<div className={styles.spinner}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Spinner;