import Link from "next/link"
import { withRouter } from "next/navigation"
import { useSearchParams } from 'next/navigation'

const Results = () => {
    const searchParams = useSearchParams()
    const score = searchParams.get('score')
    console.log("SCORE RIGHT HERE: ", score)
    return (
        <>
            <h1>Results</h1>
            <h2>You Scored: {score}/10</h2>
            <Link href='/'><button>Start Over</button></Link>
        </>
    )
}

export default Results