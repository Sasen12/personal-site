type Props = {
  children: React.ReactNode
  className?: string
  index?: number
}

export default function AnimatedCard({ children, className }: Props) {
  return <div className={className}>{children}</div>
}
