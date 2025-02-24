import Image from "next/image"
import Link from "next/link"

interface BlogArticleProps {
  category: string
  date: string
  author: string
  title: string
  excerpt: string
  image: string
}

export default function BlogArticle({ category, date, author, title, excerpt, image }: BlogArticleProps) {
  return (
    <article className="bg-white overflow-hidden group">
      <div className="relative h-[200px]">
        <div className="absolute top-4 left-4 z-10 bg-red-600 px-4 py-1 text-white text-sm">{category}</div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <time>{date}</time>
          <span>•</span>
          <span>{author}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">{title}</h3>
        <p className="text-gray-600 line-clamp-3 mb-4">{excerpt}</p>
        <Link href="#" className="text-red-600 hover:text-red-700 transition-colors inline-flex items-center gap-2">
          Learn More
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

