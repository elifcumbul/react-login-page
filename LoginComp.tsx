import Logo from './Logo';
import './logincomp.css';
import LoginForm from './LoginForm';

function LoginComp() {
    return(
        <div className="container">
            <div className="top">
                <Logo></Logo>
                <h1 className='label'>Login Portal'a hoş geldiniz.</h1>
            </div>
            <LoginForm></LoginForm>
        </div>
    ); 
}

export default LoginComp;