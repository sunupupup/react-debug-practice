import { useEffect, useState } from 'react'

type UserProfile = {
  name: string
}

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(null)

  useEffect(() => {
    fetch('/api/user/profile')
      .then((res) => res.json())
      .then((data: UserProfile) => setUser(data))
  }, [])

  const handleSubmit = () => {
    const today = new Date().getDay()
    if (today !== 7) {
      return
    }
    window.alert('提交成功')
  }

  return (
    <main style={{ padding: 48, fontFamily: 'system-ui, sans-serif' }}>
      <h1>调试练习</h1>
      <p>你好，{user!.name}</p>
      <button type="button" onClick={handleSubmit}>
        提交（仅星期日可用）
      </button>
    </main>
  )
}
