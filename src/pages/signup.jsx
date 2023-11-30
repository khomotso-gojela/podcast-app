import React, { useState } from 'react'
import { supabase } from '../superbase/client' 
import { Link } from 'react-router-dom'


const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)'
}


function Signup() {
    const [formData,setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    function handleInput(e) {
        e.preventDefault()
        const { name, value } = e.target
        
        setFormData(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    
    async function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)

        try {
            const { user, session, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options : {
                    data: {
                        user_name: formData.username
                    }
                }
            })
            if (error) throw error
         
            alert('signed in')
            
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    return (
        <div style={styles}>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>username</label>
            <br />
            <input 
                type="text"
                name='username'
                value={formData.username}
                onChange={handleInput} 
            />
            <br />
            <br />
            <label htmlFor='email'>email</label>
            <br />
            <input 
                type="email"
                name='email'
                value={formData.email}
                onChange={handleInput} 
            />
            <br />
            <br />
            <label htmlFor='password'>password</label>
            <br />
            <input 
                type="password"
                name='password'
                value={formData.password}
                onChange={handleInput} 
            />
            <br />
            <br />
            <button>Signup</button>
        </form>
        <div>Have an account? <Link to='/'>Login</Link></div>

        </div>
    )
}

export default Signup