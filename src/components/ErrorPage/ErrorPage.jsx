import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-4xl text-center text-red-500">OOPS!!!</h2>
            <Link className="ml-56 bg-green-400 p-2 rounded-md" to="/">Go back TO Home page</Link>
        </div>
    );
};

export default ErrorPage;