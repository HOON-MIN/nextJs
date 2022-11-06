import Link from "next/link";

const App = () =>{
    return(
        <div>
        <h2>링크 토마토 페이지</h2>
        <Link href="/tomato">
            move to '/tomato'
        </Link>
        </div>
    );
}

export default App;