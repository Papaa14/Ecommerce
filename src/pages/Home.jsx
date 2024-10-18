import React, { useContext } from 'react';
import { AppContext } from "../components/AppContext";
import HeroBanner from "../components/HeroBanner";
import DiscoverSection from "../components/DiscoverSection";
import ProductsSection from "../components/ProductsSection";


function Home() {
    const { isUserLogged, user } = useContext(AppContext); // Access the context
    
    return (
        <div>
            <main className="full-block">
                <HeroBanner />
                <DiscoverSection />                
                <ProductsSection sectionTitle="Special offers" sectionPhrase="Exclusive Deals and Discounts" filter="sale_percentage" id="on-sale" />
                <ProductsSection sectionTitle="Popular items" sectionPhrase="Trending products flying off the shelves" filter="times_sold" id="popular_items" />
                <ProductsSection sectionTitle="Recent releases" sectionPhrase="The most recent additions to our collection" filter="added_time" id="recent_releases" />               
            </main>
        </div>
    )
}

export default Home;
