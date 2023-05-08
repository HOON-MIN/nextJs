import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import fetch from "isomorphic-unfetch";

const App = ({ user }) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div>
      <h4>getServerSideProps 이용한 라우터 링크 이동</h4>
      <label>
        username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}>검색하기</Link>

      <br />
      <br />
      <br />

      <button
        onClick={() => {
          router.push("/tomato");
        }}
      >
        기본 라우터 기능 : tomato로 가기
      </button>

      <br />
      <br />
      <br />

      <p>useRouter를 이용한 링크이동 : 이름</p>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          router.push(`/vegetable/${name}`);
        }}
      >
        {name}로 가기
      </button>
    </div>
  );
};

export default App;
