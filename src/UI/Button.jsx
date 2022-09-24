const Button = (props) => {
  let {
    children,
    btnType,
    value,
    setValue,
    sign,
    setSign,
    firstValue,
    setFirstValue,
    calculation,
    setIsFractionalValue,
    isFractionalValue,
    className,
  } = props

  return (
    <button
      className={className}
      onClick={() => {
        // eslint-disable-next-line default-case
        switch (btnType) {
          case 'sign':
            if (sign !== '' && value !== '' && firstValue !== '') {
              setFirstValue(calculation(sign, firstValue, value))
              setValue('')
              children === 'X' ? setSign('*') : setSign(children)
            } else {
              children === 'X' ? setSign('*') : setSign(children)
              setFirstValue(value)
              setValue('')
            }

            break

          case 'number':
            value === '0' ? setValue(children) : setValue((value += children))
            break

          case 'remove':
            value.length === 1 ? setValue('0') : setValue(value.slice(0, -1))
            break

          case 'action':
            // eslint-disable-next-line default-case
            switch (children) {
              case '=':
                setValue(String(calculation(sign, firstValue, value)))
                setFirstValue('')
                setSign('')
                break
              case 'AC':
                setValue('0')
                setFirstValue('')
                setSign('')
                break

              case '.':
                isFractionalValue ? void 0 : setValue((value += '.'))
                setIsFractionalValue(true)
                break
            }

            break
        }
      }}
    >
      {children}
    </button>
  )
}

export default Button
