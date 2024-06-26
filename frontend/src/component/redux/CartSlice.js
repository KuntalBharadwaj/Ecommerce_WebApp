import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },

    reducers: {

        intializeState: (state,action)=>{
            state.items = action.payload
        },

        additems: (state,action)=>{
            let index = state.items.findIndex(item => item._id === action.payload._id)
        
            if(index >=0 ) {
                state.items[index].count += 1
            }
            else {
                let tempproduct = {...action.payload, count:1}
                state.items.push(tempproduct)
            }
        },

        removeitems: (state, action)=>{

            let index = state.items.findIndex(item => item._id === action.payload._id)
            state.items[index].count -= 1;

            if(state.items[index].count === 0) state.items.splice(index,1)
        },

        removeAllitem: (state, action)=>{
            state.items = []
        }
    }
})

export const { additems, removeitems,intializeState, removeAllitem} = CartSlice.actions
export default CartSlice.reducer
