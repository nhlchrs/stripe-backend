import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SubscriptionForm = ({ price_id }: any) => {
    const navigate = useNavigate();
    const [name, setName] = useState<string | undefined>("")
    const [email, setEmail] = useState<string | undefined>("")
    const handleBasicForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var isMailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (name === undefined || name === null || name === "") {
            toast("Name is required!")
            return;
        }
        else if (email === undefined || email === null || email === "") {
            toast("Email is required!")
            return;
        }
        else if (isMailValid.test(email) === false) {
            toast("Email is invalid!")
            return;
        }
        else {
            fetch(`${process.env.REACT_APP_API_URL}/stripe-subscription/create`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "name": name,
                    price_id
                }),
            }).then(async (result) => result.json())
                .then(data => {
                    console.log(`${data.data}`)
                    navigate("/suscribe", { state: { "client_secret": data.data } });
                }).catch(err => {
                    console.log(err.message)
                });
        }

    }
    return (
        <div className='customer--data'>
            <form onSubmit={handleBasicForm}>
                <div className="mb-3 mt-3 text-left form--group">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3 form--group">
                    <label className="form-label">Email:</label>
                    <input type="text" className="form-control" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <ToastContainer />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SubscriptionForm