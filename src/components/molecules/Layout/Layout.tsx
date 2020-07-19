import React from 'react'
import { Div } from '../../atoms';
import Navbar from '../Navbar/Navbar';

type Props = {
    children: React.ReactNode
};

const Layout = (props: Props) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}

export default Layout;
