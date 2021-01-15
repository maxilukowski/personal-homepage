import Face from "next/image"
import styles from"./Photo.module.scss"

export default function Photo(){
    return(
        <div className={styles.center}>
            <Face 
            className={styles.photo}
            src="/face.png" 
            alt="Picture of the author"
            width={300}
            height={300}
            />
        </div>
    )
}