import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container py-6">
      <nav className="flex md:flex-row">
        <div className="">
          <Link href="/">
            <a className=" font-medium">hilmicantaskiran</a>
          </Link>
        </div>
        <div className="space-x-4 ml-auto">
          <Link href="/">
            <a>home</a>
          </Link>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
