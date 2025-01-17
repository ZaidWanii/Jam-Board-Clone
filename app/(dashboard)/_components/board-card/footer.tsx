import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

type FooterProps = {
  title: string
  authorLabel: string
  createdAtLabel: string

}

export const Footer = ({
  title,
  authorLabel,
  createdAtLabel,

}: FooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation()
    event.preventDefault()

  }
  return (
    <div className='relative bg-white p-3'>
      <p className='text-[13px] truncate max-w-[calc(100%-20px)]'>{title}</p>
      <p className='opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate'>
        {authorLabel}, {createdAtLabel}
      </p>
    </div>
  )
}
