import React from 'react';
import { useParams } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';

const Room = () => {
    const { id } = useParams();
    return (
        <>
        <MainLayout>
            
            <h1></h1>

        </MainLayout>
        </>
    )
}

export default Room