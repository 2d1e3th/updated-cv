import Layout, { EntryNote } from './components/Layout';
import { Profile, About, Education } from './sections/Profile';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GitHubRepositories from './sections/GitHubRepositories';
import { Achievements, Experience, WorkingRhythm } from './sections/Milestones';
export default function App() {
  return <><EntryNote /><Layout><Profile /><About /><Education /><Skills /><Projects /><GitHubRepositories /><Achievements /><Experience /><WorkingRhythm /></Layout></>;
}
