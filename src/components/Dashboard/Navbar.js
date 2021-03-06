import React from 'react'
import './DashboardPage.css'

const Navbar = () => {
    return (
        <nav className="myNavbar">
            <div className="d-flex justify-content-between container">
                <div className="d-none d-md-flex">
                    <i className="fab fa-facebook-square fa-3x mt-2"></i>
                    <form className="form-inline ml-2">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button><i class="myNavbar__search fas fa-search fa-2x"></i></button>                        </form>
                </div>
                <div className="d-flex justify-content-center">
                    <i class="myNavbar__icon fas fa-user-friends m-3"></i>
                    <i class="myNavbar__icon fas fa-comment  m-3"></i>
                    <i class="myNavbar__icon fas fa-bell  m-3"></i>
                    <i class="myNavbar__icon d-sm d-md-none fas fa-search  m-3"></i>
                    <i class="myNavbar__icon fas fa-question-circle  m-3"></i>


                    <i
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"

                        class="myNavbar__icon fas fa-caret-down fa-2x ml-3 mt-3"></i>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">
                            Action
                            </button>
                        <button className="dropdown-item" type="button">
                            Another action
                            </button>
                        <button className="dropdown-item" type="button">
                            Logout
                            </button>
                    </div>
                </div>

            </div>

        </nav>
    )
}

export default Navbar
