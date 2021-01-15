import styles from "./Title.module.scss"

export default function Name (){


    return(
        <div className={`${styles.headline}`}>
            <h1>Maximilian Lukowski</h1>
            <div className={`${styles.underlining}`}/>
            <span>Junior Developer</span>
        </div>
    )

/*     function generateCssName (classNames) {
        let returnValue = ""
        classNames.forEach((className)=>returnValue+=styles[className] + " ")
        return returnValue
    } */
}
