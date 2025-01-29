import LoginForm from '../components/LoginForm'
import './Login.css'

export default function Login() {
    return (
        <>
            <div className="fixed min-h-full min-w-full loginbg" />
            <div className="fixed min-h-full min-w-full loginbg2" />
            <LoginForm />
        </>
    )
}