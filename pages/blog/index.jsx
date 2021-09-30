import fs from 'fs'
import path from 'path'
import * as matter from 'gray-matter'
import Link from 'next/link'

import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { sortByDate } from '@/utils/index'
import styles from '@/styles/HomePage.module.css'

export default function PostPage({ posts }) {
  return (
    <Layout>
      <div className={styles.homePage}>
        <div className="text-5xl border-b-4 p-5 font-bold ">Blogs</div>

        <div className={styles.postsBox}>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>

        {/* <Link href="/blog">
          <a className={styles.link}>All posts</a>
        </Link> */}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return { slug, frontmatter }
  })

  return {
    props: { posts: posts.sort(sortByDate) },
  }
}
