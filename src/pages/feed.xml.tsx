import { GetServerSideProps } from "next"
import { getPosts } from "../apis/notion-client/getPosts"
import { CONFIG } from "site.config"

const SITE_URL = CONFIG.link

function generateRss(posts: any[]) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${CONFIG.blog.title}</title>
      <link>${SITE_URL}</link>
      <description>${CONFIG.blog.description}</description>
      <language>${CONFIG.lang}</language>
      ${posts
        .map(
          (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${SITE_URL}/${post.slug}</link>
          <guid>${SITE_URL}/${post.slug}</guid>
          <pubDate>${new Date(post.date?.start_date || post.createdTime).toUTCString()}</pubDate>
          <description><![CDATA[${post.summary || ""}]]></description>
        </item>
      `
        )
        .join("")}
    </channel>
  </rss>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = await getPosts()
  res.setHeader("Content-Type", "application/rss+xml; charset=UTF-8")
  res.write(generateRss(posts))
  res.end()
  return { props: {} }
}

export default function Rss() {
  return null
} 