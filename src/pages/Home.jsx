import React, { useContext } from 'react';
import { AppContext } from "../components/AppContext";
import HeroBanner from "../components/HeroBanner";
import DiscoverSection from "../components/DiscoverSection";
import ProductsSection from "../components/ProductsSection";
import SubscribeSection from '../components/SubscribeSection';

function Home() {
    const { isUserLogged, user } = useContext(AppContext); // Access the context
    
    return (
        <div>
            <main className="full-block">
                <HeroBanner />
                <DiscoverSection />
                {isUserLogged && <h2>Welcome back, {user && user.username}!</h2>}
                <ProductsSection sectionTitle="Special offers" sectionPhrase="Exclusive Deals and Discounts" filter="sale_percentage" id="on-sale" />
                <ProductsSection sectionTitle="Popular items" sectionPhrase="Trending products flying off the shelves" filter="times_sold" id="popular_items" />
                <ProductsSection sectionTitle="Recent releases" sectionPhrase="The most recent additions to our collection" filter="added_time" id="recent_releases" />
                <SubscribeSection />
            </main>
        </div>
    )
}

export default Home;
