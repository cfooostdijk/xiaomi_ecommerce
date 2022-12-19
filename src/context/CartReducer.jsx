export function CartReducer(state,action){

  const ProductsList = [];
  switch (action.type) {
      case "ADD_ITEMS":

        // if(state.product.length > 0){
        //   ProductsList.push(state.product);
        //   }

          return{
              ...state,
              count:action.payload.count,
              product:[action.payload.product],
              // ProductsList:ProductsList
          } 

      default:
          break;
  }
}