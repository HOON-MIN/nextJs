import Link from "next/link";

const Child = () =>{
    return "asdasd";
}
const Tomato = () =>{
    return(
        <div>
            <h2>링크 메인페이지로</h2>
            <Link href="/">
                <Child/>
            </Link>
        </div>
    );
}

export default Tomato;