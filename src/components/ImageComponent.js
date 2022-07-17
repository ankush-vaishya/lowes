function ImageComponent({ imageDetails }) {
    return (
        <img className="image-item" key={imageDetails.id} alt={imageDetails.alt_description} src={imageDetails.urls.regular} />
    );
}

export default ImageComponent;