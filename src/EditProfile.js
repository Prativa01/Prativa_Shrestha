// import { Component } from "react";
// import './Profile.css';
// import axios from 'axios';

// class EditProfile extends Component{
//     render(){
//         return(
// <div className="col-xl-8 order-xl-1" style={{marginTop:"120px"}}>
//                         <div className="card bg-secondary shadow">
//                             <div className="card-header bg-white border-0">
//                             <div className="row align-items-center">
//                                 <div className="col-8">
//                                 <h3 className="mb-0">My Profile</h3>
//                                 </div>
                               
//                             </div>
//                             </div>
//                             <div className="card-body">
//                             <form>
//                                 <h6 className="heading-small text-muted mb-4">User information</h6>
//                                 <div className="pl-lg-4">
//                                 <div className="row">
                                
                                
//                                     <div className="col-lg-6">
//                                     <div className="form-group">
//                                         <label className="form-control-label" for="input-email">Email address</label>
//                                         <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="jesse@example.com" value={this.state.email} onChange={(event)=>{this.setState({email : event.target.value})}}/>
//                                     </div>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-lg-6">
//                                     <div className="form-group focused">
//                                         <label className="form-control-label" for="input-first-name">First name</label>
//                                         <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value={this.state.Fname} onChange={(event)=>{this.setState({Fname : event.target.value})}}/>
//                                     </div>
//                                     </div>
//                                     <div className="col-lg-6">
//                                     <div className="form-group focused">
//                                         <label className="form-control-label" for="input-last-name">Last name</label>
//                                         <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value={this.state.Lname} onChange={(event)=>{this.setState({Lname : event.target.value})}}/>
//                                     </div>
//                                     </div>
//                                 </div>
//                                 </div>
//                                 <hr className="my-4"></hr>
                            
//                                 <h6 className="heading-small text-muted mb-4">Contact information</h6>
//                                 <div className="pl-lg-4">
//                                 <div className="row">
//                                     <div className="col-md-12">
//                                     <div className="form-group focused">
//                                         <label className="form-control-label" for="input-address">Address</label>
//                                         <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value={this.state.address} onChange={(event)=>{this.setState({address : event.target.value})}} type="text"/>
//                                     </div>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-lg-4">
//                                     <div className="form-group focused">
//                                         <label className="form-control-label" for="input-city">City</label>
//                                         <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value={this.state.city} onChange={(event)=>{this.setState({city : event.target.value})}}/>
//                                     </div>
//                                     </div>
//                                     <div className="col-lg-4">
//                                     <div className="form-group focused">
//                                         <label className="form-control-label" for="input-country">Country</label>
//                                         <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value={this.state.country} onChange={(event)=>{this.setState({country : event.target.value})}}/>
//                                     </div>
//                                     </div>
//                                     <div className="col-lg-4">
//                                     <div className="form-group">
//                                         <label className="form-control-label" for="input-contact">Contact</label>
//                                         <input type="number" id="input-contact" className="form-control form-control-alternative" placeholder="Contact" value={this.state.contact} onChange={(event)=>{this.setState({contact : event.target.value})}}/>
//                                     </div>
//                                     </div>
//                                 </div>
//                                 </div>
//                                 <hr className="my-4"></hr>
                        
//                                 <h6 className="heading-small text-muted mb-4">About me</h6>
//                                 <div className="pl-lg-4">
//                                 <div className="form-group focused">
//                                     <label>About Me</label>
//                                     <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ..." value={this.state.about} onChange={(event)=>{this.setState({about : event.target.value})}}>something about you.....</textarea>
//                                 </div>
//                                 </div>

//                                 <a href="#" className="btn btn-sm btn-default float-right" onClick={this.sendUserData}>Add</a>
//                             </form>
//                             </div>
//                         </div>
//                         </div>
//         )}
// }
// export default EditProfile;