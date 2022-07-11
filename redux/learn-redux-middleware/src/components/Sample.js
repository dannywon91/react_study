import React from "react";

const Sample = ({ loadingPost, loadingUsers, post, users}) => {
    return(
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩중...'}
                {!loadingPost && post && (
                    <div>
                            {post.map(post => (
                                <h3 key={post.id}>
                                    <ul>
                                        <li>title : {post.title}</li>
                                        <li>body : {post.body}</li>
                                    </ul>
                                </h3>
                            ))}
                            
                    </div>
                )}
                
            </section>

            <section>
                <h1>사용자 목록</h1>
                {loadingUsers && '로딩중...'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}

            </section>
        </div>

    ); // return

};//Sample

export default Sample;