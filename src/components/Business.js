import React from 'react';

function Business() {
    const business = {
        imageSrc: "https://srouce.unsplash.com/random/400x300/?food",
        name: "Example Restaurant",
        address: "123 Demo Street",
        city: "Alpha",
        state: "Omega",
        zipCode: "12345",
        category: "All You Can Eat",
        rating: 4.44,
        reviewCount: 143,
    };

    return (
        <div>
            <div>
                <img src={business.imageSrc} alt={business.name}/>
            </div>
            <h2>{business.name}</h2>
            <div>
                <div>{business.address}</div>
                <div>{`${business.city}, ${business.state} ${business.zipCode}`}</div>
            </div>
            <div>
                <span>{business.category}</span>
                <span>{`${business.rating} stars`}</span>
                <span>{`${business.reviewCount} reviews`}</span>
            </div>
        </div>
    );
}

export default Business;