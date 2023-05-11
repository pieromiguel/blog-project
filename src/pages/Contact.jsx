import React from 'react'
import '../Home';
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { BlogCards } from '../components/blogCards/BlogCards'

export const Contact = () => {
    return (
        <>
            <Header />
            <div className="main-div-pages">
                <BlogCards category={'rick and morty'} />
            </div>
            <Footer />
        </>
    )
}
