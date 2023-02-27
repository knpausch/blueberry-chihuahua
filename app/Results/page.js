import Link from "next/link"

const Results = () => {
    return (
        <>
            <h1>Results</h1>
            <h2>You Scored: 0/10</h2>
            <Link href='/'><button>Start Over</button></Link>
        </>
    )
}

export default Results