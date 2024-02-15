import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { GrPrevious, GrNext } from "react-icons/gr";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import galleryItems from "../../services/galleryItems.js";
import { Container, GalleryItem, ImageDescription, ImageModal, ModalBody } from "./styles";

const items = galleryItems;

export function Gallery() {
  const [data, setData] = useState({img: '', i: 0});
  const [isClicked, setIsClicked] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const toggleDesc = () => setShowDesc(!showDesc);

  const openImage = (img, i) => {
    setData({img, i});
  }

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'nextImg') {
      setData({img: items[i + 1].img, i: i + 1});
    }
    if (action === 'previousImg') {
      setData({img: items[i - 1].img, i: i - 1});
    } 
  }

  const closeImage = () => {
    setData({img: '', i: 0});
  }

  return (
    <Container>
      {data.img && 
        <ImageModal>
          <button 
            className="close" 
            onClick={() => { setIsClicked(false); closeImage() }}
          >
            <IoClose />
          </button>

          <button 
            className="previous" 
            onClick={() => imgAction('previousImg')} 
            disabled={data.i === 0}
          >
            <GrPrevious />
          </button>

          <ModalBody src={data.img} onMouseEnter={toggleDesc} onMouseLeave={toggleDesc} />

          <ImageDescription className={showDesc ? 'show' : ''}>
            {items[data.i].desc}
          </ImageDescription>

          <button 
            className="next" 
            onClick={() => imgAction('nextImg')} 
            disabled={data.i === 12}
          >
            <GrNext />
          </button>
        </ImageModal>
      }

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="1rem">
          {items.map((item, i) => (
            <GalleryItem
              key={i}
              src={item.img}
              alt={item.desc}
              className={isClicked ? 'clicked' : ''}
              onClick={() => { setIsClicked(true); openImage(item.img, i) }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};