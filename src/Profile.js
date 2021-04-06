import { Component } from "react";
import './Profile.css';
import axios from 'axios';

class Profile extends Component {

    state = {
        fullname: "",
        username: "",
        address: "",
        contact: "",
        email: "",
        

    }

    componentDidMount() {
        const username = localStorage.getItem('username')

        axios.get('http://localhost:90/consumer/single/'+username)
        .then((response)=>{
                this.setState({
                    fullname: response.data.ConsumerData.fullname,
                    username: response.data.ConsumerData.username,
                    address: response.data.ConsumerData.address,
                    contact: response.data.ConsumerData.contact,
                    email: response.data.ConsumerData.email
                
                })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // fileHandler = (e) => {
    //     this.setState({
    //         ProductImage: e.target.files[0]
    //     })
    // }
    sendUserData = (e) => {
        e.preventDefault()
        const data = {

            fullname: this.state.fullname,
            username: this.state.username,
            address: this.state.address,
            contact: this.state.contact,
            email: this.state.email
        }
        axios.get("http://localhost:90/consumer/single/:username", data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(console.error())
            })
    }
    render() {
        return (
            <div className="container-fluid mt--7" >
                <div className="row">
                    <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0" style={{ marginTop: "200px", marginLeft: "500px" }}>
                        <div className="card card-profile shadow">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 order-lg-2">
                                    <div className="card-profile-image">
                                        <a href="#">
                                            <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg" className="rounded-circle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                <div className="d-flex justify-content-between">

                                    <a className="btn btn-sm btn-default float-right">Edit</a>
                                    
                                </div>
                            </div>
                            <div className="card-body pt-0 pt-md-4">

                                <div className="text-center">
                                                        
                                <input type ="file" name="ProductImage"  onChange={this.fileHandler}/>
                                        
                                    <h3>
                                        Fullname: {this.state.fullname}
                                    </h3>
                                    <h3>Contact: {this.state.contact}</h3>
                                    <h3>Username: {this.state.username}</h3>
                                    <h3>Address: {this.state.address}</h3>
                                    <h3>Email: {this.state.email}</h3>
                                    
                                   
                                    
                                    <hr className="my-4"></hr>
                                    <p>“You don’t need a silver fork to eat good food.” -Paul Prudhomme</p>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-8 order-xl-1" style={{marginTop:"120px"}}>
                        <div className="card bg-secondary shadow">
                            <div className="card-header bg-white border-0">
                            <div className="row align-items-center">
                                <div className="col-8"> */}
                    {/* <h3 className="mb-0">My Profile</h3>
                                </div>
                               
                            </div>
                            </div>
                            <div className="card-body">
                            <form>
                                <h6 className="heading-small text-muted mb-4">User information</h6>
                                <div className="pl-lg-4">
                                <div className="row">
                                
                                
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" for="input-email">Email address</label>
                                        <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="jesse@example.com" value={this.state.email} onChange={(event)=>{this.setState({email : event.target.value})}}/>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                    <div className="form-group focused">
                                        <label className="form-control-label" for="input-first-name">First name</label>
                                        <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value={this.state.Fname} onChange={(event)=>{this.setState({Fname : event.target.value})}}/>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="form-group focused">
                                        <label className="form-control-label" for="input-last-name">Last name</label>
                                        <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value={this.state.Lname} onChange={(event)=>{this.setState({Lname : event.target.value})}}/>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <hr className="my-4"></hr>
                            
                                <h6 className="heading-small text-muted mb-4">Contact information</h6>
                                <div className="pl-lg-4">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div className="form-group focused">
                                        <label className="form-control-label" for="input-address">Address</label>
                                        <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value={this.state.address} onChange={(event)=>{this.setState({address : event.target.value})}} type="text"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                    <div className="form-group focused">
                                        <label className="form-control-label" for="input-city">City</label>
                                        <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value={this.state.city} onChange={(event)=>{this.setState({city : event.target.value})}}/>
                                    </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <div className="form-group focused">
                                        <label className="form-control-label" for="input-country">Country</label>
                                        <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value={this.state.country} onChange={(event)=>{this.setState({country : event.target.value})}}/>
                                    </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="form-control-label" for="input-contact">Contact</label>
                                        <input type="number" id="input-contact" className="form-control form-control-alternative" placeholder="Contact" value={this.state.contact} onChange={(event)=>{this.setState({contact : event.target.value})}}/>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <hr className="my-4"></hr>
                        
                                <h6 className="heading-small text-muted mb-4">About me</h6>
                                <div className="pl-lg-4">
                                <div className="form-group focused">
                                    <label>About Me</label>
                                    <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ..." value={this.state.about} onChange={(event)=>{this.setState({about : event.target.value})}}>something about you.....</textarea>
                                </div>
                                </div>

                                <a href="#" className="btn btn-sm btn-default float-right" onClick={this.sendUserData}>Add</a>
                            </form>
                            </div> */}
                </div>
            </div>





        )
    }
}
export default Profile;