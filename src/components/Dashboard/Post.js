import React from 'react'
import Comment from './Comment'
import CommentBox from './CommentBox'

const Post = () => {
    return (
        <div className="post d-flex flex-column border mt-3 ml-2 mr-2 ">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <img className="post__avatar m-3" src="https://scontent.fixc7-1.fna.fbcdn.net/v/t1.0-9/p960x960/118308288_304059874190370_1512535342050765281_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=Zz7dhhOqobEAX_Yeefg&_nc_ht=scontent.fixc7-1.fna&tp=6&oh=1c5d8912a64731d5c3a92f6d19a944d3&oe=5F6D0EA0" alt="avatar" />
                    <div className=" mt-3 ml-2">
                        <h5 className="post__name mb-0">Dhiraj kaushik</h5>
                        <p className="text-secondary">August 22 at 8:23 PM</p>
                    </div>
                </div>
                <i class="mt-1 mr-2 fas fa-ellipsis-h"></i>
            </div>
            <div className="m-0">
                <p className="lead ml-3">Very sweet picture</p>
                <img className="post__image" src="https://qrius.com/wp-content/uploads/2019/07/cute.jpeg" alt="post" />
            </div>
            <div className="d-flex justify-content-between pt-2 pl-2 pr-2 border">
                <div className="d-flex">
                    <i class="post__likeCount p-1 fas fa-thumbs-up"></i>
                    <p className="text-secondary ml-1">6</p>
                </div>
                <p className="text-secondary">6 comments</p>
            </div>
            <div className="d-flex justify-content-around p-2 border mb-1">
                <i class="text-primary post__icons fas fa-thumbs-up"> Like</i>
                <i class="post__icons far fa-comment-alt"> Comment</i>
                <i class="post__icons far fa-share-square"> Share</i>
            </div>
            <Comment/>
            <Comment/>
            <Comment/>
            <CommentBox/>
        </div>
    )
}

export default Post
