import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()

    return (
    <>
        <div>
            Welcome to Next js!
        </div>
        <span onClick={() => router.push('/about')}>Click me</span>
    </>)
}