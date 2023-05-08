import fetch from "isomorphic-unfetch";
import styled from "styled-jsx/css";
import { GoMail } from "react-icon/go";

const style = styled`
.profile-box{
    width: 25%;
    max-width : 272px;
    margin-right :26px;
    border : 1px solid #ababab;
}
.profile-image-wrapper {
    width : 100%;
    
}
.profile-image-wrapper .profile-image {
    display : block;
    width: 100%; 
}

.profile-username {
    margin : 0 ,
    padding-top : 16px; 
    font-size : 26px; 
}

.profile-user-login {
    margin : 0 ;
    font-size : 20px;
}

.profile-user-bio {
    margin : 0 ;
    padding-top : 16px;
    font-size : 14px;
}
`;

const name = ({ user }) => {
  return (
    <>
      <div className="profile-box">
        <div className="profile-image-wrapper">
          <img
            className="profile-image"
            src={user.avatar_url}
            alt={`${user.name} 프로필 이미지`}
          />
        </div>
        <h2 className="profile-username">{user.name}</h2>
        <p className="profile-user-login">{user.login}</p>
        <p className="profile-user-bio">
          {user.bio ? user.bio : "프로필 소개문 자리 입니다"}
        </p>
      </div>
      <style jsx>{style}</style>
    </>
  );
};

name.getInitialProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { user };
    }
    return { props: { user } };
  } catch (error) {
    console.log(error);
    return {};
  }
};

/* export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`https://api.github.com/users/${params.name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user, time: new Date().toISOString() } };
    }
    return { props: { time: new Date().toISOString() } };
  } catch (e) {
    console.log(e);
    return { props: { time: new Date().toISOString() } };
  }
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: "jerrynim" } }],
    fallback: false,
  };
} */

/* export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
}; */

export default name;
