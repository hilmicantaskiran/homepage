import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container py-6">
      <nav className="flex md:flex-row">
        <div className="">
          <Link href="/" className="hover font-medium">
            hilmicantaskiran
          </Link>
        </div>
        <div className="space-x-4 ml-auto">
          <Link href="/" className="hover">
            home
          </Link>
          <Link href="/blog" className="hover">
            blog
          </Link>
        </div>
      </nav>
    </header>
  )
}
