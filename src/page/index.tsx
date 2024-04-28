import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/v1')
  }, [navigate])
  return null
}
