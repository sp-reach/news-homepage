import gamingImage from '../assets/images/image-gaming-growth.jpg'
import retroImage from '../assets/images/image-retro-pcs.jpg'
import laptopImage from '../assets/images/image-top-laptops.jpg'
import { Article } from './ArticleList'

type RankedArticle = Article & {
  ranking: number
  imageUrl: string
  imageAlt: string
}

function RankedArticleItem({
  header,
  ranking,
  text,
  imageUrl,
  imageAlt
}: RankedArticle) {
  const prefixedRanking = ranking < 10 ? `0${ranking}` : `${ranking}`

  return (
    <article className="mt-12 flex space-x-4">
      <div className="flex-col">
        <img
          className="w-fit max-w-[100px] md:max-w-[150px]"
          src={imageUrl}
          alt={imageAlt}
        />
      </div>
      <div className="flex flex-col place-content-between">
        <h1 className="text-4xl font-bold text-gray">{prefixedRanking}</h1>
        <h4 className="cursor-pointer text-xl font-extrabold text-darkPurple hover:text-softRed">
          {header}
        </h4>
        <p className="text-darkGray">{text}</p>
      </div>
    </article>
  )
}

export function RankedArticles() {
  const rankedArticles: RankedArticle[] = [
    {
      header: 'Reviving Retro PCs',
      id: 1,
      imageAlt: 'Animated retro computer',
      imageUrl: retroImage,
      ranking: 1,
      text: 'What happens when old PCs are given modern upgrades?'
    },
    {
      header: 'Top 10 Laptops of 2022',
      id: 2,
      imageAlt: 'Glowing red laptop keyboard',
      imageUrl: laptopImage,
      ranking: 2,
      text: 'Our best picks for various needs and budgets.'
    },
    {
      header: 'The Growth of Gaming',
      id: 3,
      imageAlt: 'Hand catching playstation controller',
      imageUrl: gamingImage,
      ranking: 3,
      text: 'How the pandemic has sparked fresh opportunities.'
    }
  ]
  return (
    <section
      aria-label="Ranked articles"
      className="flex flex-col md:flex-row md:space-x-4"
    >
      {rankedArticles.map((item) => (
        <RankedArticleItem key={item.id} {...item} />
      ))}
    </section>
  )
}
