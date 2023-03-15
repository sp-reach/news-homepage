export type Article = {
  id: number
  header: string
  text: string
}

function ArticleItem({
  article,
  index,
  allArticlesLength
}: {
  article: Article
  index: number
  allArticlesLength: number
}) {
  return (
    <>
      <article className="flex flex-col">
        <h2 className="cursor-pointer text-xl font-bold hover:text-softOrange">
          {article.header}
        </h2>
        <p className="text-gray">{article.text}</p>
      </article>
      {index !== allArticlesLength - 1 && <hr className="my-4 text-darkGray" />}
    </>
  )
}

export function ArticleList() {
  const articles: Article[] = [
    {
      id: 1,
      header: 'Hydrogen VS Electric Cars',
      text: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
      id: 2,
      header: 'The Downsides of AI Artistry',
      text: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
      id: 3,
      header: 'Is VC Funding Drying Up?',
      text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
  ]

  return (
    <section
      key="ArticleList"
      className="flex flex-col justify-evenly bg-darkPurple p-2 px-4 text-white"
    >
      <h1 className="text-5xl font-extrabold text-softOrange">New</h1>
      {articles.map((article, index) => {
        return (
          <ArticleItem
            allArticlesLength={articles.length}
            article={article}
            index={index}
            key={article.id}
          />
        )
      })}
    </section>
  )
}
