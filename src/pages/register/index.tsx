import { useState } from "react";
import LayoutWithoutHero from "../../layout/without-hero"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [loader, setLoader] = useState<boolean>(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setLoader(true)
        fetch(`${process.env.REACT_APP_API_URL}/stripe-onboarding/create-account`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "name": name,
            }),
        }).then(async (result) => result.json())
            .then(data => {
                console.log(data)
                if (name === undefined || name === null || name === "") {
                    setLoader(false)
                    toast("Name is required!")
                }
                else if (data.message === "email must be an email") {
                    setLoader(false)
                    toast("Email is required!")
                } else {
                    setLoader(true)
                    console.log(`${data.data.url}`)
                    window.location.replace(`${data.data.url}`);
                }
            }).catch(err => {
                console.log(err.message)
            });
    }

    return (
        <LayoutWithoutHero breadcrumb={{
            pageTitle: "Registration Page",
            links: [
                {
                    link: "/",
                    title: "Home"
                },
                {
                    title: "Register"
                }
            ]
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="form--wrapper">
                            <h2>Stripe Onboard</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 mt-3">
                                    <label>Name:</label>
                                    <input type="text" className="form-control" placeholder="Enter name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label>Email:</label>
                                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            {loader && <div className="overlay--loader"><div className="loader" /></div>}
        </LayoutWithoutHero >
    )
}

export default Register;