async function getNews() {
  )

  return res.json()
}

export default async function Home() {
  const data = await getNews()

  const news = data.hits.slice(0, 10)

  return (
    <div className="container">
      <h1 className="title">AI Radar</h1>

      <p className="subtitle">
        每天自动整理 AI 世界的重要消息
      </p>

      <div className="grid">
        <div className="card">
          <h2>{news.length}</h2>
          <p>今日 AI 新闻</p>
        </div>

        <div className="card">
          <h2>LIVE</h2>
          <p>自动实时更新</p>
        </div>

        <div className="card">
          <h2>AI</h2>
          <p>全球 AI 热点</p>
        </div>
      </div>

      <div className="news">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h3>
              {item.title || 'AI 新闻更新'}
            </h3>

            <p>
              来源：{item.author || 'AI Radar'}
            </p>

            <br />

            <a
              href={item.url}
              target="_blank"
              style={{ color: '#4ea1ff' }}
            >
              查看原文
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}