import styles from './hero.module.css';

export default function Hero({title, subtitle, imageOn = false}: {title: string, subtitle: string, imageOn?: boolean}) {
	return (
		<div className={styles.text}>
			<h1 className={styles.title}>{title}</h1>
			<p>{subtitle}</p>
			{imageOn && <figure>画像</figure>}
		</div>
	)
}