async function getNews() {
    'httpshn.algolia.comapiv1searchquery=AI',
    {
      cache 'no-store',
    }
  )

  return res.json()
}

export default async function Home() {
  const data = await getNews()

  const news = data.hits.slice(0, 10)

  return (
    div className=container
      h1 className=titleAI Radarh1

      p className=subtitle
        每天自动整理 AI 世界的重要消息
      p

      div className=grid
        div className=card
          h2{news.length}h2
          p今日 AI 新闻p
        div

        div className=card
          h2LIVEh2
          p自动实时更新p
        div

        div className=card
          h2AIh2
          p全球 AI 热点p
        div
      div

      div className=news
        {news.map((item, index) = (
          div key={index} className=news-item
            h3
              {item.title  'AI 新闻更新'}
            h3

            p
              来源：{item.author  'AI Radar'}
            p

            br 

            a
              href={item.url}
              target=_blank
              style={{ color '#4ea1ff' }}
            
              查看原文
            a
          div
        ))}
      div
    div
  )
}