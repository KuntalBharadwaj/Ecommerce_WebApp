import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        additems: (state,action)=>{
            state.items.push(action.payload)
        },

        removeitems: (state, action)=>{

            for(let i = 0;i<state.items.length;i++) {
                if(state.items[i].id === action.payload) {
                    state.items.splice(i,1)
                    break
                }
            }

            // state.items = state.items.filter(e=>{
            //     return (e.newid !== action.payload)
            // })
        }

    }
})

export const { additems, removeitems } = CartSlice.actions
export default CartSlice.reducer
