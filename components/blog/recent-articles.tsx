import BlogArticle from "./blog-article"

interface Article {
  category: string
  date: string
  author: string
  title: string
  excerpt: string
  image: string
}

export default function RecentArticles() {
  const articles: Article[] = [
    {
      category: "International News",
      date: "06 Mar 2024",
      author: "Straightalk",
      title: "Bidibidi FM: A Radio Station For Refugees, By Refugees",
      excerpt:
        "Bidibidi Refugee Settlement supports hundreds of thousands refugees, mainly from South Sudan. Bidibidi FM is, for many, their main...",
      image: "/initiate/chil6.jpg",
    },
    {
      category: "STF News",
      date: "31 Jan 2024",
      author: "Straightalk",
      title: "Straight Talk Bursary Scheme Beneficiaries Graduate",
      excerpt:
        "Seven of the Bursary Scheme beneficiaries are part of thousands graduating at Makerere University's 74th Graduation Ceremony.",
      image: "/initiate/chil6.jpg?height=200&width=400",
    },
    {
      category: "STF News",
      date: "17 Jan 2024",
      author: "Straightalk",
      title: "Embassy Of Ireland Karamoja Bursary Programme",
      excerpt:
        "We are delighted to sign a partnership with Embassy Of Ireland to support over 1,400 students in 2024 in the next phase of the E...",
      image: "/initiate/chil6.jpg?height=200&width=400",
    },
  ]

  return (
    <div className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Recent <span className="text-red-600">Articles</span>
          </h2>
          <p className="text-gray-600">Know what is happening inside straight talk and else where</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <BlogArticle key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  )
}

