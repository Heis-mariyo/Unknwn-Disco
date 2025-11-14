'use client'
import { useEffect, useRef, useState } from 'react'

interface TextScrambleProps {
  children: string
  className?: string
  hoverOnly?: boolean
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'

export default function TextScramble({ children, className = '', hoverOnly = true }: TextScrambleProps) {
  const [text, setText] = useState(children)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const originalText = children

  const scramble = () => {
    let iteration = 0
    
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setText((prev) =>
        originalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index]
            }
            if (originalText[index] === ' ') return ' '
            
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }

      iteration += 1 / 3
    }, 30)
  }

  useEffect(() => {
    if (!hoverOnly) {
      scramble()
    }
  }, [])

  return (
    <span 
      className={className} 
      onMouseEnter={hoverOnly ? scramble : undefined}
      onMouseLeave={() => setText(originalText)}
    >
      {text}
    </span>
  )
}