// import axios from "axios";
// import { Component } from "react";
// import { Form } from 'react-bootstrap';

// class UpdateProduct extends Component {
//     state = { 
//         ProductName: "",
//         // ProductImage: "",
//         ProductPrice: "",
//         ProductDesc: "",
//         ProductAvailable: "",
//         ProductRating: "",
//         ProductType: "",
//         id : this.props.match.params.id
//     }

//     changeHandler = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     // fileHandler = (e) => {
//     //     this.setState({
//     //         ProductImage: e.target.files[0]
//     //     })
//     // }

//     componentDidMount() {
//         alert(this.state.id)
//         axios.get("http://localhost:90/product/single/" + this.state.id)
//             .then((response) => {
//                 this.setState({
//                     ProductName: response.data.ProductName,
//                     ProductImage: response.data.ProductImage,
//                     ProductPrice: response.data.ProductPrice,
//                     ProductDesc: response.data.ProductDesc,
//                     ProductAvailable: response.data.ProductAvailable,
//                     ProductRating: response.data.ProductRating,
//                     ProductType: response.data.ProductType,

//                 })


//             })
//             .catch((err) => {
//                 console.log(err.response)
//             })
//     }

//     updateData = (e) => {
//         e.preventDefault();
//         axios.put('http://localhost:90/product/update', this.state)
//             .then((response) => {
//                 console.log(response)
//             })
//             .catch((err) => {
//                 console.log(err.response)
//             })
//     }


//     render() {
//         return (

//             <div>
//                 <form>

//                     <p><u><b>
//                         Product Name
//             <input type="text" name="ProductName" value={this.state.ProductName} onChange={this.changeHandler} />

//                     </b></u></p>

//                     <div className="mb-3">
//                         <Form.File id="formcheck-api-regular">
//                             <p> <b><u>Product Image</u></b></p>
//                             <input type="file" name="ProductImage" onChange={this.fileHandler} />
//                         </Form.File>
//                     </div>

//                     <p><u><b>
//                         Product Price
//             <input type="text" name="ProductPrice" value={this.state.ProductPrice} onChange={this.changeHandler} />
//                     </b></u></p>
//                     <p><u><b>
//                         Product Description
//             <input type="text" name="ProductDesc" value={this.state.ProductDesc} onChange={this.changeHandler} />
//                     </b></u></p>
//                     <p><u><b>
//                         Product availability
//             <input type="text" name="ProductAvailable" value={this.state.ProductAvailable} onChange={this.changeHandler} />
//                     </b></u></p>
//                     <p><u><b>
//                         Product Rating
//             <input type="text" name="ProductRating" value={this.state.ProductRating} onChange={this.changeHandler} />
//                     </b></u></p>
//                     <p><u><b>
//                         Product Type
//             <input type="text" name="ProductType" value={this.state.ProductType} onChange={this.changeHandler} />
//                     </b></u></p>
//                     <p>
//                         <button onClick={this.updateData}>Update</button>
//                     </p>
//                 </form>
//             </div>
//         )

//     }
// }

// export default UpdateProduct