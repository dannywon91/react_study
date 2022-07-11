import React from 'react';
import { useParams, Link, Route, Routes } from 'react-router-dom';
import Profiles from './Profiles';


const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
}//data 객체

const Profile = () => {

    const {username} = useParams();
    console.log('username:::::' , username)



    const profile = data[username];
    console.log('profile::::::', profile)

    if(!profile) {
        return (
            <div>존재하지 않는 사용자입니다.{username + 'asdas'}</div>
            // <div>존재하지 않는 사용자입니다.</div>
        ); //return
    } else {
        return(
            <div>
                <h3>
                    {/* <p>현재 파라미터 : {username}</p> */}
                    {username}({profile.name})
                </h3>
                <p>{profile.description}</p>

                <h3>사용자 목록</h3>
                <ul>
                    <li>
                        <Link to="/profiles/velopert">velopert</Link>
                    </li>
                    <li>
                        <Link to="/profiles/gildong">gildong</Link>
                    </li>
                </ul>
                
                {/* <Routes>
                    <Route 
                        path="/*" 
                        element = {<div>사용자를 선택해 주세요.</div>} />
                    <Route 
                        path="profiles/:username" element={<Profiles />} />
                </Routes> */}
            </div>
            
        );
    }//if - else
}// Profile 함수

export default Profile;