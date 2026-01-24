import Link from 'next/link'

export function FeatureCards({ children }) {
  return (
    <div className="feature-cards">
      {children}
    </div>
  )
}

export function FeatureCard({ title, description, href }) {
  return (
    <Link href={href} className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  )
}
