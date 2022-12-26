

const Login = () => {
    return (
        <div className="login-container">

            <form>
                <div>
                <label>User Name:</label>
                <input type="text" id="userName" />
                </div>
                <div>
                <label>Password:</label>
                <input type="password" id="password" />
                </div>
                <input type="button" value="Login" />

            </form>
        </div>
    )
}