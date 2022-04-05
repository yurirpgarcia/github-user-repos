import { Routes, Route } from 'react-router-dom'

import { UserSearch, RedirectToIndexOnNotFound } from './screens'

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserSearch />} />
      <Route path="/:username" element={<UserSearch />} />
      <Route path="*" element={<RedirectToIndexOnNotFound />} />
    </Routes>
  );
}

export default App;
