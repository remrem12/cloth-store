import React from 'react'

import './sign-in.style.css'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buton.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput type="email" 
                        handleChange = { this.handleChange } 
                        name = 'email' 
                        value = { this.state.email } 
                        required
                        label = 'email'
                    />
                    
                    <FormInput type="password" 
                        name = 'password' 
                        value = { this.state.password } 
                        handleChange = { this.handleChange }
                        required
                        label = 'password'
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick = { signInWithGoogle } isGoogleSignin>Sign in with Google</CustomButton>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default SignIn;