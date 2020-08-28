import React from 'react'

const Comment = () => {
    return (
        <div>
            <div className="d-flex p-2">
                <img className="comment__avatar m-2" src="https://scontent.fixc7-1.fna.fbcdn.net/v/t1.0-9/p960x960/118308288_304059874190370_1512535342050765281_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=Zz7dhhOqobEAX_Yeefg&_nc_ht=scontent.fixc7-1.fna&tp=6&oh=1c5d8912a64731d5c3a92f6d19a944d3&oe=5F6D0EA0" alt="avatar" />
                <div style={{ background: '#F2F3F5' }} className="d-flex align-items-center pl-2 pr-2">
                    <h5 className="comment__name">Dhiraj kaushik</h5>
                    <p className="comment__text">very nice</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
