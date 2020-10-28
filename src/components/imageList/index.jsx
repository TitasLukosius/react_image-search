import React from 'react';

const ImageList = ({images}) => {

    const imgs = images.map(image => {
        return <img className='img' key={image.id} src={image.urls.regular} alt={image.alt_description}/>
    });

    let total = '';
    if(images.length > 0) {
        total = `Images found: ${images.length}`;
    }

    return (
        <div className = 'imageContainer'>
            <h5>{total}</h5>
            <div className='imageList'>
                {imgs}
            </div>
        </div>
    )
}

export default ImageList;
