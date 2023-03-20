import { useState } from 'react'
import { Link } from 'react-router-dom';
import { LOG_IN } from './Mutations';
import { useMutation } from '@apollo/client';


function SignIn() {
        const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    

    const
        {   email,
            password
        } = formData

    const [handleLogin, { data, loading, error }] = useMutation(LOG_IN, {
            variables: {
                credential: {
                    ...formData
                }
            }
    })

    console.log(data)

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin()
    }

    return (
        <div className='p-3 text-center relative'>
                <h2 className='mb-12 card-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="email" className="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='email'
                        id='email'
                        value={email}
                        onChange={onChange}
                    />
                    <input type="text" className="input input-bordered input-accent w-full max-w-xs mb-3" placeholder='password'
                        id='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <button type='submit' className="btn w-full btn-accent text-white">Login</button>
                </div>
            </form>
            <Link to='/' className='btn btn-sm absolute top-0 right-0'>Go back</Link>
        </div>
    )
}

export default SignIn