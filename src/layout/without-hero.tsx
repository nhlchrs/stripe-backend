import Breadcrumb from '../components/breadcrumb';
import { BreadcrumbType } from '../types/breadcrumd.type';
import Footer from '../components/footer';
import Header from '../components/header';
import React from 'react';

type Props = {
    children?: React.ReactNode;
    breadcrumb: BreadcrumbType
};

const LayoutWithoutHero = ({ children, breadcrumb }: Props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <Breadcrumb breadcrumb={breadcrumb}></Breadcrumb>
            {children}
            <Footer></Footer>
        </React.Fragment>
    )
}

export default LayoutWithoutHero;