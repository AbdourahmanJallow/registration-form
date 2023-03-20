import { Link } from "react-router-dom"
import icon from '../assets/slack.svg'; 
function Home() {
    return (
        <div className='grid grid-cols-1 place-content-center'>
            <div className='text-center'>
                <div className="relative flex flex-col items-center mb-4">
                    <img src={icon} alt="icon" width='50' fill='#fff' />
                </div>
                <div className='mb-3'>
                    <h1 className="text-2xl mb-3">Welcome to Lorem</h1>
                    <p className="text-lg mb-5">Login with your UTG email account to continue</p>
                </div>
                <div>
                    <Link to='/log-in' className="btn bg-accent text-white border-collapse mr-3">
                        Log in
                    </Link>
                    <Link to='/sign-up' className="btn bg-accent text-white">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home