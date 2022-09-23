import { BreadcrumbLinkType, BreadcrumbType } from '../../types/breadcrumd.type';

import { Link } from 'react-router-dom'

type Props = {
    breadcrumb: BreadcrumbType
}

const Breadcrumb = ({breadcrumb}: Props ) => {
    return (
        <section className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2>{breadcrumb.pageTitle}</h2>
                    <ol>
                        {
                            breadcrumb.links.map((item: BreadcrumbLinkType) => (
                                <li>
                                    { !!item.link ? <Link to={item.link}>{item.title}</Link> : item.title }
                                </li>
                            ))
                        }
                    </ol>
                </div>

            </div>
        </section>
    )
}

export default Breadcrumb;