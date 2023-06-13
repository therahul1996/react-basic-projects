import React, {useState, useEffect} from 'react'

const Theme = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }else {
            setTheme('light')
        }
    }
    useEffect(() => {
        document.body.classList = theme;
    }, [theme])
  return (
    <div className={`${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>Hello World</h1>
    </div>
  )
}

export default Theme