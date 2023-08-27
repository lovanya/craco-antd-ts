import { Button, ConfigProvider } from 'antd'

import './App.css'

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      <div className='App'>
        <Button type='primary'>确定</Button>
      </div>
    </ConfigProvider>
  )
}

export default App
