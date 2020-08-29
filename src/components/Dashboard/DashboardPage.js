import React from 'react'
import './DashboardPage.css'
import Post from './Post'
import CreatePost from './CreatePost'
import Navbar from './Navbar'
const DashboardPage = () => {
    return (
        <div className="App container">
        <Navbar/>
        <div className="row ">
            <div className="col-12">
                <CreatePost/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </div>
        </div>
        </div>
    )
}

export default DashboardPage
