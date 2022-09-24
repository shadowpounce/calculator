import styles from './Output.module.css'

const Output = ({ sign, value, firstValue }) => {
  return (
    <div className={styles.output}>
      <label htmlFor="" className={styles.signLabel}>
        {value !== '' || firstValue !== '' ? `${sign}` : void 0}
      </label>
      <p>{firstValue}</p>
      <input value={value} type="text" readOnly />
    </div>
  )
}

export default Output
