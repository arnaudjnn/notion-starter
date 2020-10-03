const NOTION_BLOG_ID = 'f4fcfcf75ac3409e9ed0e00b580d588a'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}