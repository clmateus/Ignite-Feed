import styles from "./Post.module.css"

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/clmateus.png" />
                    <div className={styles.authorInfo}>
                        <strong>Mateus Costa</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="29 de Junho às 11:30h" dateTime="2022-06-29 11:30:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Lorem ipsum</p> 
                <p>dolor sit amet consectetur adipisicing elit. Consectetur, ut. Iusto a ipsam ipsa repellendus autem non dolorem nulla quaerat?</p> 
                <p>Error <a href="#">quibusdam</a> distinctio ad dolore voluptates</p> 
                <p>si obcaecati vel architecto.</p>
            </div>
        </article>
    )
}