import React,{ useState} from 'react'

const SignupModal = () => {
    const years = ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988']

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [dob,setDob]=useState(
        {
            day:'',
            month:'',
            year:''
        }
    )
    const [gender,setGender]=useState('')

    return (
        <div className="signUpModal">
            {/* Button trigger modal */}
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">
                Create new account
            </button>
            {/* Modal */}
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex={-1} role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title h3" id="staticBackdropLabel">Sign Up</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div class="form-row mb-3">
                                    <div class="col">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="First name" 
                                        value={firstName}
                                         onChange={e=>setFirstName(e.target.value)}/>
                                    </div>
                                    <div class="col">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Last name"
                                        value={lastName}
                                        onChange={e=>setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email address"
                                        aria-describedby="emailHelp"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <p style={{ textAlign: 'left' }}>Date of birth</p>
                                <div class="form-row">
                                    <div className="col">
                                        <select class="form-control" value={dob.day} onChange={e=>setDob({
                                            ...dob,
                                            day: e.target.value
                                        })}>
                                            <option value="0">Day</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select class="form-control" value={dob.month} onChange={e=>setDob({
                                            ...dob,
                                            month: e.target.value
                                        })}>
                                            <option value="0">Month</option>
                                            <option value="1">Jan</option>
                                            <option value="2">Feb</option>
                                            <option value="3">Mar</option>
                                            <option value="4">Apr</option>
                                            <option value="5">May</option>
                                            <option value="6">Jun</option>
                                            <option value="7">Jul</option>
                                            <option value="8">Aug</option>
                                            <option value="9">Sep</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select class="form-control" value={dob.year} onChange={e=>setDob({
                                            ...dob,
                                            year: e.target.value
                                        })} >
                                            <option value="0">Year</option>
                                            {
                                                years.map((year) => (<option value={year}>{year}</option>))
                                            }


                                        </select>
                                    </div>
                                </div>
                                <p style={{ textAlign: 'left' }}>Gender</p>
                                <div className="form-row">
                                    <div class="col form-check form-check-inline border p-2">
                                        <label class="mr-5 form-check-label" for="inlineRadio1">Male</label>

                                        <input class="form-check-input" name="gender" type="radio"  id="inlineRadio1" value="Male" onChange={e=>setGender(e.target.value)}/>
                                    </div>
                                    <div class="col form-check form-check-inline border p-2">
                                        <label class="mr-5 form-check-label" for="inlineRadio2">Female</label>
                                        <input class="form-check-input" name="gender" type="radio"  id="inlineRadio2" value="Female" onChange={e=>setGender(e.target.value)} />
                                    </div>
                                    <div class="col form-check form-check-inline border p-2">
                                        <label class="mr-5 form-check-label" for="inlineRadio3">Custom</label>
                                        <input class="form-check-input" name="gender" type="radio"  id="inlineRadio3" value="Other" onChange={e=>setGender(e.target.value)} />
                                    </div>
                                </div>
                                <button className="signUpModal__btn btn  btn-success m-4">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupModal
