const CONFIG = {
  // profile setting (required)
  profile: {
    name: "getsolaris",
    image: "/avatar.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend Engineer",
    bio: "",
    email: "getsolaris.kr@gmail.com",
    linkedin: "",
    github: "getsolaris",
    instagram: "",
  },
  projects: [
    {
      icon: 'AiOutlineTrophy',
      name: `Elastic Contributor Silver`,
      href: "https://www.credential.net/20fc49df-8502-4bbe-9c1f-62a9fe84c8b0#acc.7EuzYQWq",
    },
    {
      icon: 'AiOutlineNodeIndex',
      name: `Elasticsearch Index Visualizer`,
      href: "https://es-index-visualizer.getsolaris.kr",
    },
  ],
  // blog setting (required)
  blog: {
    title: "getsolaris blog",
    description: "이런 저런 생각을 적어두는 블로그",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://getsolaris.kr",
  since: 2018, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
