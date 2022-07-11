let postId = 1; //id의 초기값

const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용'
    }  
];

/* 포스트 작성
    POST /api/posts
    {title, body}
*/

exports.write = (ctx) => {
    //REST API의 request body는 ctx.request.body에서 조회할 수 있다.
    const {
        title,
        body
    } = ctx.request.body;
    
    postId += 1; //기존 postId 값에 1을 더한다.
    
    const post = {id: postId, title, body};
    posts.push(post);
    ctx.body= post;
}; //write

/* 포스트 목록 조회
    GET /api/posts/:id
*/
exports.list = (ctx) => {
    ctx.body = posts;
};

/* 특정 포스트 조회
    GET /api/posts/:id
*/
exports.read = (ctx) => {
    const {id} = ctx.params;
    console.log('id=', id);
    console.log('ctx.params::::', ctx.params);

    //주어진 id 값으로 포스트를 찾습니다.
    //파라미터로 받아온 값은 문자열 형식이니 파라미터를 숫자로 변환하거나,
    //비교할 p.id 값을 문자열로 변경해야 함.
    const post = posts.find(p => p.id.toString() === id);
    console.log('post::::', post);
    console.log();


    //포스트가 없으면 오류를 반환한다.
    if(!post){
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.'
        }
        return;
    } //if

    ctx.body = post;

}; //read

/* 특정 포스트 제거
    DELETE /api/posts/:id
*/

exports.remove = (ctx) => {
    const {id} = ctx.params;

    //해당 id를 가진 post가 몇 번째인지 확인합니다.
    const index = posts.findIndex(p => p.id.toString() === id);

    //post가 없으면 오류를 반환
    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.'
        } 
        return;
    } // if
    
    //index번째 아이템을 제거합니다.
    posts.splice(index, 1);
    ctx.status = 204; // No Content

}; //remove

/* 포스트 수정(교체)
    PUT /api/posts/:id
    {title, body}
*/
exports.replace = (ctx) => {
    //PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용함.
    const {id} = ctx.params;
    console.log('id:::', id);
    console.log('replace ctx.params:::', ctx.params);

    //해당 id를 가진 post가 몇번째인지 확인합니다.
    const index = posts.findIndex(p => p.id.toString() === id);

    //포스트가 없으면 오류를 반환한다.
    if(index === -1){
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.'
        }
        return;
    } //if
    

    //전체 객체를 덮어 씌웁니다.
    //따라서 id를 제외한 기존 정보를 날리고, 객체를 새로만듭니다.
    posts[index] = {
        id,
        ...ctx.request.body
    }
}; //replace

/* 포스트 수정(특정 필드 변경)
    PATCH /api/posts/:id
    {title, body}
*/

exports.update = (ctx) => {
    //PATCH 메서드는 주어진 필드만 교체합니다.
    const {id} = ctx.params;
    console.log('id:::', id)
    console.log('ctx.params:::', ctx.params)

    //해당 id를 가진 post가 몇번째인지 확인합니다.
    const index = posts.findIndex(p => p.id.toString() === id);
    console.log('index:::', index);

    //포스트가 없으면 오류 반환
    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.'
        }
        return;
    };
    
    posts[index] = {
        ...posts[index],
        ...ctx.request.body
    };
    ctx.body = posts[index];

}; //update



