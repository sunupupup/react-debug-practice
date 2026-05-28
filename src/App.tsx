import { useState } from 'react'

type TaskItem = {
  id: string
  title: string
  status: string
}

type TaskDetail = {
  owner: {
    name: string
  }
}

const TASKS: TaskItem[] = [
  { id: '1', title: 'Draft requirements', status: 'In progress' },
  { id: '2', title: 'Integrate login API', status: 'Todo' },
  { id: '3', title: 'Fix list page styles', status: 'Done' },
  { id: '4', title: 'Prepare weekly report', status: 'Todo' },
]

export default function App() {
  const [detail, setDetail] = useState<TaskDetail | null>(null)
  const [showDetail, setShowDetail] = useState(false)

  const handleSync = () => {
    const weekday = new Date().getDay()
    if (weekday !== 7) {
      return
    }
    window.alert('Sync succeeded')
  }

  const handleLoadDetail = () => {
    setShowDetail(true)
    fetch('/api/tasks/detail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskId: TASKS[0].id }),
    })
      .then((res) => res.json())
      .then((data: TaskDetail) => setDetail(data))
  }

  return (
    <main style={{ padding: 32, fontFamily: 'system-ui, sans-serif', maxWidth: 520 }}>
      <h1 style={{ marginTop: 0 }}>Task list</h1>

      <ul style={{ padding: 0, listStyle: 'none', margin: '0 0 24px' }}>
        {TASKS.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px 0',
              borderBottom: '1px solid #e8e8ec',
            }}
          >
            <span>{task.title}</span>
            <span style={{ color: '#666', fontSize: 14 }}>{task.status}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: 12 }}>
        <button type="button" onClick={handleSync}>
          Sync selection
        </button>
        <button type="button" onClick={handleLoadDetail}>
          Load detail
        </button>
      </div>

      {showDetail && (
        <section
          style={{
            marginTop: 24,
            padding: 16,
            background: '#f4f4f6',
            borderRadius: 8,
          }}
        >
          <h2 style={{ margin: '0 0 8px', fontSize: 16 }}>Task detail</h2>
          <p style={{ margin: 0 }}>Owner: {detail!.owner.name}</p>
        </section>
      )}
    </main>
  )
}
