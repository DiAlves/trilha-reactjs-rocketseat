import Clipboard from '../../assets/Clipboard.svg';
import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={Clipboard} alt='Clipboard' className={styles.icon}/>

      <div className={styles.text}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}