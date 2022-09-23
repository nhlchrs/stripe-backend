const CheckoutForm = () => {
    return (
        <form action="#" method="post" className="php-email-form">
            <div className="row">
                <div className="col form-group"> <input type="text" name="name" className="form-control" id="name" placeholder="First Name" required /></div>
                <div className="col form-group"> <input type="text" className="form-control" name="name" id="name" placeholder="Last Name" required /></div>
            </div>
            <div className="row">
                <div className="col form-group"> <input type="text" name="name" className="form-control" id="name" placeholder="Phone" required /></div>
                <div className="col form-group"> <input type="text" className="form-control" name="name" id="name" placeholder="Email Address" required /></div>
            </div>
            <div className="form-group">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Select Country</option>
                    <option>India</option>
                    <option>South Africa</option>
                    <option>United State</option>
                    <option>Australia</option>
                </select>
            </div>
            <div className="form-group"> <input type="text" className="form-control" name="subject" id="subject" placeholder="Town/City" required /></div>
            <div className="form-group"> <input type="text" className="form-control" name="subject" id="subject" placeholder="State / County" required /></div>
            <div className="form-group"> <input type="text" className="form-control" name="subject" id="subject" placeholder="Postal Code" required /></div>
            <div className="form-group"><textarea className="form-control" name="message" rows={5} placeholder="Additional Information" required ></textarea></div>
        </form>
    )
}

export default CheckoutForm;