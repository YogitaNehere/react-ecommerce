

const Login = () => {
    return (
        <div className="login-container">

            <form>
                <div>
                    <label htmlFor="username">User Name:</label>
                    <input type="text" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" />
                </div>
                <input type="button" value="Login" />

            </form>
        </div>
    )
}