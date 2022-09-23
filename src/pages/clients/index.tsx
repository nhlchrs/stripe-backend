import Layout from '../../layout';
import { Link } from 'react-router-dom'
import { clients } from "../../dummyData/client";

const Clients = () => {    
    return (
        <Layout>
        <div className="row justify-content-center">
            {(clients.map((client: { name: string; id: string;}) => (
                <div className="col-1" key={client.name}>
                    <Link to={`/${client.id}`}>{client.name}</Link>  
                </div>
            )))}
            
        </div>
        </Layout>
    )
}

export default Clients;