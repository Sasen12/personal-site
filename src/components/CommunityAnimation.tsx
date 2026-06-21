"use client"

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  index?: number
}

export default function CommunityAnimation({ children, className, delay, index }: Props) {
  return <div className={className}>{children}</div>
}
