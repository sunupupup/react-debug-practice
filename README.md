# Frontend debug exercise

Single-file React app. All logic lives in **`src/App.tsx`**.

## Run

```bash
npm install
npm run dev
```

## UI

A **task list** renders on load (4 static items).

| Button | Expected | Actual (buggy) |
|--------|----------|----------------|
| **Sync selection** | Shows “Sync succeeded” | No response |
| **Load detail** | Shows task detail | **White screen** after click |

## Your job

1. Confirm the list renders (not broken on first paint).
2. Click each button; use **Console** and **Network** (watch for `POST /api/tasks/detail`).
3. Fix `src/App.tsx`.

## Done when

- **Sync selection** shows success feedback when clicked.
- **Load detail** does not crash; detail area renders safely.
