import { useState } from 'react'
import { supabase } from '../superbase/client'
import { Link, useNavigate } from 'react-router-dom'


const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

function Login({setToken}) {
    const [formData,setFormData] = useState({
        email:'',
        password:''
    })

    let navigate = useNavigate()

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

        try {
            
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password
            })
            
              
            if (error) throw error

            setToken(data)
            navigate('/App')
            
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    return (
        <div style={styles}>
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                name='email'
                value={formData.email}
                onChange={handleInput} 
            />
            <br />
            <br />
            <input 
                type="password"
                name='password'
                value={formData.password}
                onChange={handleInput} 
            />
            <br />
            <br />
            <button>Login</button>
        </form>
        <div>Don't have an account? <Link to='/signup'>Sign up</Link></div>

        </div>
    )
}

export default Login