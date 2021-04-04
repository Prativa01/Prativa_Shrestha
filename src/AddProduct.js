// import { Component } from "react";
// import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// //For Admin 
// class AddProduct extends Component{
//     state = {
//         ProductName : "",
//         ProductImage : "",
//         ProductPrice:"",
//         ProductDesc:"",
//         ProductAvailable:"",
//         ProductRating:"",
//         ProductType:"",
//         config:{
//             headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
//         }
//     }
    
// ChangeItems=(e)=>{
//     this.setState({
//         [e.target.name]:e.target.value
//     })
// }
// //img handler

// fileHandler = (e)=>{
//     this.setState({
//         ProductImage : e.target.files[0]
//     })
// }

// SendItems=(e)=>{
//     //preventDefault== By default refresh hunxa so, blank nahoss vannah refresh nahoss vannah
//     e.preventDefault();
//     const data = new FormData();
//     data.append('ProductName',this.state.ProductName)
//     data.append('ProductImage',this.state.ProductImage)
//     data.append('ProductPrice',this.state.ProductPrice)
//     data.append('ProductDesc',this.state.ProductDesc)
//     data.append('ProductAvailable',this.state.ProductAvailable)
//     data.append('ProductRating',this.state.ProductRating)
//     data.append('ProductType',this.state.ProductType)

//     console.log(data)

//     axios.post("http://localhost:90/product/insert",data)

    
//     .then((response)=>{
//         console.log(response)
//         window.location.reload(true);
//     })
//     .catch((error)=>{
//         console.log(error.response)
//     })
// }


//     render(){
//         return(
// <div>
// <div className="card" style={{ width: '65rem' , margin :'10px'}}>
//     <form>
   
//         <p><u><b>
//             Product Name
//             <input type ="text" name="ProductName" value={this.state.ProductName} onChange={this.ChangeItems}/>
                
//             </b></u></p>

//             <div className="mb-3">
//     <Form.File id="formcheck-api-regular">
//      <p> <b><u>Product Image</u></b></p>
//       <input type ="file" name="ProductImage"  onChange={this.fileHandler}/> 
//       </Form.File>
//       </div>
        
//     <p><u><b>
//             Product Price
//             <input type ="text" name="ProductPrice" value={this.state.ProductPrice} onChange={this.ChangeItems}/> 
//             </b></u></p>
//             <p><u><b>
//             Product Description
//             <input type ="text" name="ProductDesc" value={this.state.ProductDesc} onChange={this.ChangeItems}/> 
//             </b></u></p>
//             <p><u><b>
//             Product availability
//             <input type ="text" name="ProductAvailable" value={this.state.ProductAvailable} onChange={this.ChangeItems}/> 
//             </b></u></p>
//             <p><u><b>
//             Product Rating
//             <input type ="text" name="ProductRating" value={this.state.ProductRating} onChange={this.ChangeItems}/> 
//             </b></u></p>
//             <p><u><b>
//             Product Type 
//             <input type ="text" name="ProductType" value={this.state.ProductType} onChange={this.ChangeItems}/> 
//             </b></u></p>
//         <p><button onClick={this.SendItems}>
//             Add 
//             </button></p>
            
//     </form>
// </div>
// </div>
//             )
//     }
    
// }
// export default AddProduct;