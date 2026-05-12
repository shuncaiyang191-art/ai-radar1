'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          'https://hn.algolia.com/api/v1/search?query=AI'
        )

        const data = await res.json()

        setNews(data.hits || [])
      } catch (error) {
        console.log(error)
      }
    }

    fetchNews()
  }, [])

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
          <p>自动更新</p>
        </div>

        <div className="card">
          <h2>AI</h2>
          <p>全球 AI 热点</p>
        </div>
      </div>

      <div className="news">
        {news.slice(0, 10).map((item, index) => (
          <div key={index} className="news-item">
            <h3>
              {item.title || item.story_title || 'AI 新闻'}
            </h3>

            <p>
              作者：{item.author || 'AI Radar'}
            </p>

            <br />

            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#4ea1ff' }}
              >
                查看原文
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}