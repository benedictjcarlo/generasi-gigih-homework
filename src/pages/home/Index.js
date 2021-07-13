import React from 'react';

const Index = () => {
    const imgUrl = "https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif ";
    return (
        <div>
            <form>
                <h1>Search you image or gif</h1>
                <input placeholder="Search image..."></input>
                <button>Search</button>
            </form>
            <img src={imgUrl} alt="Image gif"/>
        </div>
    );
};

export default Index;