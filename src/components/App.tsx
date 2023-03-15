import { ArticleList } from './ArticleList'
import { Heading } from './Heading'
import { MainSection } from './MainSection'
import { RankedArticles } from './RankedArticles'

function App() {
  return (
    <div className="w-full min-w-[200px] max-w-screen-lg bg-white p-4 md:mx-auto">
      <Heading />
      <section
        aria-label="Container - wrapper"
        className="flex flex-col md:flex-row md:space-x-4"
      >
        <MainSection />
        <ArticleList />
      </section>
      <RankedArticles />
    </div>
  )
}

export default App
