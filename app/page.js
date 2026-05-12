export default function Home() {
  const news = [
    {
      title: 'OpenAI 发布全新 AI Agent 功能',
      summary: 'AI 可以自动执行复杂任务，并支持工作流自动化。',
    },
    {
      title: 'Gemini 视频能力升级',
      summary: 'Google Gemini 现在支持更强大的 AI 视频生成。',
    },
    {
      title: 'DeepSeek 新模型开源',
      summary: '新模型提升推理能力，并支持开发者免费使用。',
    },
  ]

  return (
    <div className="container">
      <h1 className="title">AI Radar</h1>

      <p className="subtitle">
        每天自动整理 AI 世界的重要消息
      </p>

      <div className="grid">
        <div className="card">
          <h2>128</h2>
          <p>今日 AI 新闻</p>
        </div>

        <div className="card">
          <h2>54</h2>
          <p>热门 AI 工具</p>
        </div>

        <div className="card">
          <h2>Agent</h2>
          <p>AI 热门趋势</p>
        </div>
      </div>

      <div className="news">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}