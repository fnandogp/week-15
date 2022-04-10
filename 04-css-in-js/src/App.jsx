import { useState } from 'react'
import logo from './logo.svg'
import { AppLogo, Button, Header, Root } from './style.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Root>
      <Header>
        <AppLogo src={logo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
      </Header>
    </Root>
  )
}

export default App
