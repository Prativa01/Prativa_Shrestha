export const initialState={
    basket:[],
};
// if you add in the basket then reducer know what to do if you remove any thing from the basket that reducer know what to do

// state means the state of the product
// action means what you want to do add or remove

//Selector
export const getBasketTotal =(basket) =>
    basket?.reduce((amount,item)=> item.price + amount,0);


const reducer =(state, action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) =>basketItem.id === action.id
            );

            let newBasket = [...state.basket];
            if(index>=0){
                newBasket.splice(index,1);

            }else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return{
                ...state,
                basket:newBasket
            }
            // return{
            //     ...state,
            //     basket: state.basket.filter(item => item.id !==action.id  )
            // }
        
        default:
            return state;
    }
}

export default reducer;