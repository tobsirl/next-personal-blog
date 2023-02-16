const delay = (ms) => new Promise((resolve) => setTimeout(resolve(1), ms))

const getPost = async(slug) => {
  const post = await delay(5000)
  return {slug}
  
}

export default async function BlogPost({params}) {
  const { slug } = params
  const post = await getPost(slug)
  return (
    <div>{post.slug}</div>
  )
}

