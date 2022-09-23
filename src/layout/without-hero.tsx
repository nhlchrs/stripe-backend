import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/footer';
import Header from '../components/header';
import React from 'react';

type Props = {
    children?: React.ReactNode;
};

const LayoutWithoutHero = ({ children }: Props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            {children}
            <Footer></Footer>
        </React.Fragment>
    )
}

export default LayoutWithoutHero;