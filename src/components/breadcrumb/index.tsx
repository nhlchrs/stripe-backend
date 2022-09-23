import { Link } from 'react-router-dom'

const Breadcrumb = () => {
    return (
        <section className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2>Checkout Page</h2>
                    <ol>
                        <li>
                            <Link to="/">Home</Link></li>
                        <li>Checkout</li>
                    </ol>
                </div>

            </div>
        </section>
    )
}

export default Breadcrumb;