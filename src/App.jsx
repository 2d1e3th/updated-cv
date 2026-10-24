import { lazy, Suspense } from 'react';
import Layout, { EntryNote } from './components/Layout';
import { Profile, About, Education } from './sections/Profile';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GitHubRepositories from './sections/GitHubRepositories';
import { Achievements, Experience, WorkingRhythm } from './sections/Milestones';
const CV = lazy(() => import('./sections/CV'));
export default function App() {
  if (['/cv','/cv/','/cv.html'].includes(window.location.pathname)) return <Suspense fallback={<p className="p-8">Opening CV…</p>}><CV /></Suspense>;
  return <><EntryNote /><Layout><Profile /><About /><Education /><Skills /><Projects /><GitHubRepositories /><Achievements /><Experience /><WorkingRhythm /></Layout></>;
}
