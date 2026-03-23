import styles from './index3.module.css'

function GlobalClasses() {
    return (
        <>
            <h1 className="myHeader">This will get global class style</h1>
            <p className={styles.paragraph}>This is just a paragraph and will get the local class style</p>
        </>
    )
}

export default GlobalClasses;