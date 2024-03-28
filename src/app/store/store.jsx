import { create } from 'zustand'

const useStore = create((set) => ({
    dNone:'none',
    dNone2:'none',
    dNone3:'none',
    dis2:(x)=>set({dNone:x}),
    dis3:(x2)=>set({dNone2:x2}),
    dis4:(x3)=>set({dNone3:x3}),
    

}))
export default useStore