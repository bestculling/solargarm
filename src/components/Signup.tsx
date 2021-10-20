import { Link } from 'react-router-dom'

function Register() {
    return (<div className="w-full max-w-xs">
        <form className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
            </div>
            <div className="mb-6">
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="mb-6">
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign up
                </button>
            </div>
        </form>
        <Link to={`/`}>
            หากคุณมีบัญชีเเล้ว
        </Link>
    </div>)
}

export default Register