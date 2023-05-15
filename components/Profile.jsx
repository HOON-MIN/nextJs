import styled from "styled-jsx/css";
import { GoMail, GoLink, GoOrganization, GoLocation } from "react-icons/go";

const style = styled`
    .profile-box{
        width: 25%;
        max-width : 272px;
        margin-right :26px;
    }
    .profile-image-wrapper {
        width : 100%;
        border : 1px solid #e1e4e8;    
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
    
    .profile-user-info{
        display: flex;
        align-items: center;
        margin :4px 0 0 ;
    }
    
    .profile-user-info-text{
        margin-left: 6px;
    }
    `;

const Profile = ({ user }) => {
  if (!user) {
    return null;
  }

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
        <p className="profile-user-info">
          <GoLocation size={16} color="#6a737d" />
          <span className="profile-user-info-text">
            {user.location ? user.location : "Location"}
          </span>
        </p>
        <p className="profile-user-info">
          <GoMail size={16} color="#6a737d" />
          <span className="profile-user-info-text">
            {user.email ? user.email : "email@email.com"}
          </span>
        </p>
        <p className="profile-user-info">
          <GoLink size={16} color="#6a737d" />
          <span className="profile-user-info-text">
            {user.blog ? user.blog : "blog.com"}
          </span>
        </p>
        <p className="profile-user-info">
          <GoOrganization size={16} color="#6a737d" />
          <span className="profile-user-info-text">
            {user.company ? user.company : "Company"}
          </span>
        </p>
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export default Profile;