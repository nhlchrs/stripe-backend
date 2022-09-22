import Footer from '@components/footer';
import Header from '@components/header';
import Hero from '@components/hero';
import React from 'react';

type Props = {
    children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <Hero></Hero>
            {children}
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Layout;