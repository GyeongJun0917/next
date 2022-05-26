import styles from "@/styles/Home.module.css";

export function Home() {
    return (
        <> < header className = {styles.w3DisplayContainer+ ' ' + styles.w3Content+ ' ' + styles.w3Center} style = {{maxWidth:"1500px"}} > <img
        className={styles.w3Image}
            src="https://coredot-ipynb-space.s3.ap-northeast-2.amazonaws.com/9lbH72KYh9/20200812/e10OG2S5.png"
            alt="Me"
            width="1500"
            height="600"/>
     

        <div
            className={styles.w3Bar+ ' ' +styles.w3LightGrey+ ' ' +styles.w3Round+ ' ' +styles.w3DisplayBottommiddle+ ' ' +styles.w3HideSmall}
            style={{bottom:"-16px"}}>
            <a href="#" className={styles.w3BarItem+ ' ' +styles.w3Button}>Home</a>
            <a href="#portfolio" className={styles.w3BarItem+ ' ' +styles.w3Button}>Portfolio</a>
            <a href="#contact" className={styles.w3BarItem+ ' ' +styles.w3Button}>Contact</a>
        </div>
    </header>

    <div className={styles.w3Center+ ' ' +styles.w3LightGrey+ ' ' +styles.w3Padding16+ ' ' +styles.w3HideLarge+ ' ' +styles.w3HideMedium}>
        <div className={styles.w3Bar+ ' ' +styles.w3LightGrey}>
            <a href="#" className={styles.w3BarItem+ ' ' +styles.w3Button}>Home</a>
            <a href="#portfolio" className={styles.w3BarItem+ ' ' +styles.w3Button}>Portfolio</a>
            <a href="#contact" className={styles.w3BarItem+ ' ' +styles.w3Button}>Contact</a>
        </div>
    </div>
   


            

     

</>
    )
}