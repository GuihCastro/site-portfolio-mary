import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { GrPrevious, GrNext } from "react-icons/gr";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Container, GalleryItem, ImageModal, ModalBody } from "./styles";

import art1 from "../../assets/img/gallery/01.jpg";
import art2 from "../../assets/img/gallery/02.jpg";
import art3 from "../../assets/img/gallery/03.jpg";
import art4 from "../../assets/img/gallery/04.jpg";
import art5 from "../../assets/img/gallery/05.jpg";
import art6 from "../../assets/img/gallery/06.jpg";
import art7 from "../../assets/img/gallery/07.jpg";
import art8 from "../../assets/img/gallery/08.jpg";
import art9 from "../../assets/img/gallery/09.jpg";
import art10 from "../../assets/img/gallery/10.jpg";
import art11 from "../../assets/img/gallery/11.jpg";
import art12 from "../../assets/img/gallery/12.jpg";
import art13 from "../../assets/img/gallery/13.jpg";

const images = [
  art1,
  art2,
  art3,
  art4,
  art5,
  art6,
  art7,
  art8,
  art9,
  art10,
  art11,
  art12,
  art13,
]

export function Gallery() {
  const [data, setData] = useState({img: '', i: 0});
  const [isClicked, setIsClicked] = useState(false);

  const openImage = (img, i) => {
    setData({img, i});
  }

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'nextImg') {
      setData({img: images[i + 1], i: i + 1});
    }
    if (action === 'previousImg') {
      setData({img: images[i - 1], i: i - 1});
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

          <ModalBody src={data.img} />

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
          {images.map((image, i) => (
            <GalleryItem
              key={i}
              src={image}
              alt=""
              className={isClicked ? 'clicked' : ''}
              onClick={() => { setIsClicked(true); openImage(image, i) }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};