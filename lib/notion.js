const NOTION_BLOG_ID = 'd0aa40bcd23249c7a772aeaea62abdd0'

export const getAllArticles = async (lang) => {
	const articles = await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
  return await Promise.all(articles.filter(artcl => artcl.lang === lang).map(async article => {
    article.content = await fetch(
      `https://notion-api.splitbee.io/v1/page/${article.id}`
    ).then((res) => res.json());
    return article
  }))

}

export const getArticleBySlug = async (lang, slug) => {
  const articles = await getAllArticles(lang)
  return articles.find(article => article.slug === slug);
}