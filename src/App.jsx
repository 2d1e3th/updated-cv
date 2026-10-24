import Layout, { EntryNote } from './components/Layout';
import { Profile, About, Education } from './sections/Profile';
export default function App() {
  return <><EntryNote /><Layout><Profile /><About /><Education /></Layout></>;
}
