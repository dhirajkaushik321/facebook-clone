import React from 'react'
import './DashboardPage.css'
import Post from './Post'
import CreatePost from './CreatePost'
const DashboardPage = () => {
    return (
        <div className="row ">
            {/* <div className="bg-primary d-none d-md-block col-sm-3">hello</div> */}
            <div className="col-12">
                <CreatePost/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </div>
            {/* <div className="bg-dark d-none d-md-block col-sm-3">world</div> */}
        </div>
    )
}

export default DashboardPage
