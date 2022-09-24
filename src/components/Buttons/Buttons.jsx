import styles from './Buttons.module.css'
import Button from '../../UI/Button'
import { RiDeleteBack2Fill } from 'react-icons/ri'

const buttons = [
  { className: styles.buttonClear, id: 0, btnType: 'action', body: 'AC' },
  {
    className: 'remove-btn ' + styles.buttonClear,
    id: 1,
    btnType: 'remove',
    body: <RiDeleteBack2Fill />,
  },
  { className: styles.buttonAction, id: 2, btnType: 'sign', body: '%' },
  { className: styles.buttonAction, id: 3, btnType: 'sign', body: '/' },
  { className: styles.button, id: 4, btnType: 'number', body: '1' },
  { className: styles.button, id: 5, btnType: 'number', body: '2' },
  { className: styles.button, id: 6, btnType: 'number', body: '3' },
  { className: styles.buttonAction, id: 7, btnType: 'sign', body: 'X' },
  { className: styles.button, id: 8, btnType: 'number', body: '4' },
  { className: styles.button, id: 9, btnType: 'number', body: '5' },
  { className: styles.button, id: 10, btnType: 'number', body: '6' },
  { className: styles.buttonAction, id: 11, btnType: 'sign', body: '-' },
  { className: styles.button, id: 12, btnType: 'number', body: '7' },
  { className: styles.button, id: 13, btnType: 'number', body: '8' },
  { className: styles.button, id: 14, btnType: 'number', body: '9' },
  { className: styles.buttonAction, id: 15, btnType: 'sign', body: '+' },
  { className: styles.button, id: 17, btnType: 'number', body: '0' },
  { className: styles.button, id: 18, btnType: 'action', body: '.' },
  { className: styles.buttonAction, id: 19, btnType: 'action', body: '=' },
]

const Buttons = ({
  setValue,
  value,
  sign,
  setSign,
  firstValue,
  setFirstValue,
  calculation,
  setIsFractionalValue,
  isFractionalValue,
}) => {
  return (
    <div className={styles.buttons}>
      {buttons.map((button) => (
        <Button
          setIsFractionalValue={setIsFractionalValue}
          isFractionalValue={isFractionalValue}
          calculation={calculation}
          firstValue={firstValue}
          setFirstValue={setFirstValue}
          sign={sign}
          setSign={setSign}
          value={value}
          setValue={setValue}
          key={button.id}
          btnType={button.btnType}
          className={button.className}
        >
          {button.body}
        </Button>
      ))}
    </div>
  )
}

export default Buttons
