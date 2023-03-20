import { useState } from 'react'
import { Link } from 'react-router-dom';
import SIGN_UP from './Mutations';
import { useMutation } from '@apollo/client';


function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        matNumber: '',
        password: ''
    });
    const [users, setUsers] = useState([])

    const
        { firstName,
            lastName,
            email,
            matNumber,
            password
        } = formData
    
    const [handleSignUp, { data, loading, error }] = useMutation(SIGN_UP, {
        variables: {
            studentData: {
                firstName,
                lastName,
                email,
                password,
                matNumber: parseInt(matNumber)
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


    const addUser = () => {
        const id = users.length ? users[users.length - 1].id + 1 : 1;
        // formData.id = id;
        const newUser = {
            id: id,
            ...formData
        }
        const newUsers = [...users, newUser];
        setUsers(newUsers)
        return newUser;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleSignUp()
    }

    return (
        <div className='p-3 items-center relative'>
                <h2 className='mb-12 card-title'>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="text" className="input input-bordered input-accent w-full max-w-xs mb-2"
                        placeholder='first name'
                        id='firstName'
                        value={firstName}
                        onChange={onChange}
                    />
                    <input type="text" className="input input-bordered input-accent w-full max-w-xs mb-2"
                        placeholder='last name'
                        id='lastName'
                        value={lastName}
                        onChange={onChange}
                    />
                    <input type="email" className="input input-bordered input-accent w-full max-w-xs mb-2"
                        placeholder='email'
                        id='email'
                        value={email}
                        onChange={onChange}
                    />
                    <input type="number" className="input input-bordered input-accent w-full max-w-xs mb-2"
                        placeholder='mat number'
                        id='matNumber'
                        value={matNumber}
                        onChange={onChange}
                    />
                    <input type="text" className="input input-bordered input-accent w-full max-w-xs mb-3"
                        placeholder='password'
                        id='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <button type='submit' className="btn w-full btn-accent text-white">Sign up</button>
                </div>
            </form>
            <Link to='/' className='btn btn-sm absolute top-0 right-0'>Go back</Link>
        </div>
    )
}

export default SignUp