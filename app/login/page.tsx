export default function Page() {
    return (
        <form>
            <div>
                Email: <input type="text" name="email" />
            </div>
            <div>
                Password: <input type="password" name="password" />
            </div>
            <button>Login</button>
        </form>
    );
}
