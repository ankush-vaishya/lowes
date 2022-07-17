import ImageComponent from "./ImageComponent";

function ImageListComponent({ imageListData }) {
    return (
        imageListData?.map((imageItem) => {
            return <ImageComponent key={imageItem.id} imageDetails={imageItem} />
        })
    );
}

export default ImageListComponent;