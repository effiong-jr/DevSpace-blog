import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Post.module.css'

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <Image
        src={post.frontmatter.cover_image}
        height={'420'}
        width={600}
        alt="cover image"
        className="mb-4 rounded"
      />

      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {post.frontmatter.date}
        </span>
        <div>{post.frontmatter.category}</div>
      </div>

      <div className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-2xl text-gray-700 font-bold hover:underline">
            {post.frontmatter.title}
          </a>
        </Link>

        <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-gray-900 hover:text-blue-600">Read more...</a>
        </Link>
        <div className="item-center">
          {/* <Image
            src={post.frontmatter.author_image}
            alt="author Image"
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            height={50}
            width={50}
          /> */}

          <img
            src={`${post.frontmatter.author_image}`}
            alt="author"
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
          />
          <h3 className="text-gray-700 font-bold">{post.frontmatter.author}</h3>
        </div>
      </div>
    </div>
  )
}

export default Post
