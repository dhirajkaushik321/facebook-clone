import {SIGN_IN,SIGN_UP} from '../types'
import {auth,db} from '../.././config/firebase'

export const signUp=({email,password})=>async dispatch=>{
    try{
        await auth.createUserWithEmailAndPassword(email,password)

    }catch(err){
        
    }
}