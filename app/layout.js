export const metadata = {
  title: 'AI Radar',
  description: 'AI 新闻自动整理平台',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}