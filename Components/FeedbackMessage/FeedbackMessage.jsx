import styles from "./FeedbackMessage.module.css"

const FeedbackMessage = () => {
    return(
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <h2 className={styles.feedbackText}>Some message</h2>
            </div>
        </div>
    )
}

export default FeedbackMessage