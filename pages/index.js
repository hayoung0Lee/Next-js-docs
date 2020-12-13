import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
    const router = useRouter()
    console.log("home")
    return (
    <>
        <div>
            Welcome to Next js!
        </div>
        <Link
          href={{
            pathname: '/about',
            // query: { name: 'test' },
          }}
        >
          <a>About us</a>
        </Link>
    </>)
}