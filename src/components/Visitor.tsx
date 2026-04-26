import { Counter, CounterResponse } from 'counterapi';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"

const counter = new Counter({ workspace: 'portfoliov3' })

interface IViews extends CounterResponse {
  data: { up_count: number }
}

async function incrementCount(): Promise<number | null> {
  try {
    const result = await counter.up('visitors-counter') as IViews;
    return result?.data?.up_count ?? null
  } catch (error) {
    console.error('Error getting count:', error);
    return null
  }
}

export default function Visitor() {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    incrementCount().then((res) => setViews(res))
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="flex justify-center py-2"
    >
      <span className="pixel-text text-[11px] text-muted-foreground tabular-nums">
        VISITOR <Link to={'https://flaction.vercel.app/'} target='_blank' className="hover:text-primary">#</Link>{views ?? '—'}
      </span>
    </motion.div>
  )
}