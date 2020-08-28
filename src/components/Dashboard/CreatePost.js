import React from 'react'

const CreatePost = () => {
    return (
        <form className="m-3">
            <div class="form-group mb-1">
                <label style={{ background: "#F5F6F7", width: "100%" }} for="exampleFormControlTextarea1" className="border mb-0 p-2 h5 text-secondary">Create Post</label>
                <textarea placeholder="Write something here..." class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="d-flex">
                <button style={{ background: '#365899', fontSize: '1.2rem' }} className="btn btn-block m-1 text-light"><strong>Post</strong></button>
                <i class="text-success fas fa-image fa-3x align-self-center"></i>
            </div>
        </form>
    )
}

export default CreatePost
