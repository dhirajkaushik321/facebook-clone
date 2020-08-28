import React from 'react'

const CommentBox = () => {
    return (
        <div  className="commentBox d-flex ">
        <img className="comment__avatar mt-3 ml-3 mb-3" src="https://scontent.fixc7-1.fna.fbcdn.net/v/t1.0-9/p960x960/118308288_304059874190370_1512535342050765281_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=Zz7dhhOqobEAX_Yeefg&_nc_ht=scontent.fixc7-1.fna&tp=6&oh=1c5d8912a64731d5c3a92f6d19a944d3&oe=5F6D0EA0" alt="avatar" />
        <form>
            <div class="form-group mt-3 ml-2">
                <input  type="text" class="commentBox__input form-control p-3"  placeholder="Write a comment..." />
            </div>
        </form>
    </div>
    )
}

export default CommentBox
