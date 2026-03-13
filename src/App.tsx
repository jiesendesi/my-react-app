import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        {/* 这里以后可以换成你的真实头像链接 */}
        <img src="https://r2.image-upload.app/tyImg/pX0jtoIl.jpg" className="logo" alt="My Avatar" style={{ borderRadius: '50%' }} />
      </div>
      
      <h1>Jiesendesi 的个人主页</h1>
      
      <div className="card">
        <p>
          这是一个从手机 Termux 端发出的 React 站点喵。
        </p>
        <p>
          目前掌握技术:全都不会
        </p>
        去玩了
        <button onClick={() => setCount((count) => count + 1)}>
          爱来自杰森德斯: {count}
        </button>
      </div>

      <p className="read-the-docs">
        “指尖拨动，全球可见，吗”
      </p>
    </div>
  )
}

export default App

