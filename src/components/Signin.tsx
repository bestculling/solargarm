import { Link } from 'react-router-dom'

function Login() {
    return (<div>
        <div className="w-full max-w-xs">
            <form className="px-8 pt-6 pb-8 mb-4">
                <div className="mb-4 ">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" />
                </div>
                <div className="mb-6">
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <Link to={`/profile`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                    </Link>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="">
                        ลืมรหัสผ่าน?
                    </a>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                เข้าสู่ระบบด้วยบัญชี Google
            </p>
            <Link to={`/`}>
                หากคุณยังไม่มีบัญชี
            </Link>
        </div>
    </div>)
}

export default Login