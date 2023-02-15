const getPost = async(slug) => {
  const post = await fetch(`https://www.reddit.com/r/${slug}.json`)
  return post.json()
  
}

export default async function BlogPost({params}) {
  const { slug } = params
  const post = await getPost(slug)
  return (
    <div>post</div>
  )
}

