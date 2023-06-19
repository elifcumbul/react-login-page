import "./loginform.css";
import "./loginbutton.css";

function LoginForm(){
    return(
        <form className="middle">
            <div className="form">
                <div className="part1">
                    <label>
                        <input
                            placeholder="Kullanıcı Adı"
                            aria-label="Username"
                            aria-required="true"
                            type="text"
                            className="a b c firstBox"
                        />        
                    </label>
                </div>
                <div className="part2">
                    <label>
                        <input
                            placeholder="Şifre"
                            aria-required="true"
                            type="password"
                            className="a b c password"
                        />
                    </label>
                </div>
                <div className="Button">
                    <div className="forgot">
                        <h2 className="reminder">
                            <input type="checkbox" className="checkbox"></input>
                            Şifremi Hatırla
                        </h2>
                        <h2 className="forgotpass">Şifremi unuttum?</h2>
                    </div>
                    <div className="ButtonLog">
                        <button className="Login" type="submit">GİRİŞ YAP</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;