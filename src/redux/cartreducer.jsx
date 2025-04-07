import { createSlice, configureStore } from '@reduxjs/toolkit'

const cartslice = createSlice({
  name: 'cart',
  initialState: {
    products:[]
  },
  reducers: {
    addtocart: (state, action) => {
const item = state.products.find(item=>item.id===action.payload.id)     
        
if(item){
    item.quantity+=action.payload.quantity
}else {
    state.products.push(action.payload)
}
    },
    removeitem: (state,action) => {
       state.products=state.products.filter(item=>item.id!==action.payload)    
    }, 
  resetcart:(state) => {
      state.products=[]
    }

  }
})

export const { addtocart, removeitem, resetcart } = cartslice.actions

export default cartslice.reducer