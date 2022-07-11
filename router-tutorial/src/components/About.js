import React, {useMemo, useEffect} from 'react';
import { useLocation } from 'react-router-dom';


const useQuery = () => {
    const location = useLocation();
    useEffect(() => {
        console.log('useEffectlocation:', location);
    });


    console.log('location::::::' , location + 'asdasd')
    
    return useMemo(()=> new URLSearchParams(location), [location]);
}// useQuery 함수

const About = () => {
    let query = useQuery();
    console.log('query:::', query);


    const showDetail = query.get('detail') === 'true';
    console.log('showDetail:::', showDetail);
    
    return(
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해봅니다.</p>
            {showDetail && <p>detail 값을 true로 설정하셨군요</p>}
            {!showDetail && <p>detail 값을 true로 설정안했네요?</p>}
            
        </div>
    )
    
}//About


export default About;