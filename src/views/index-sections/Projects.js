import React, { useState, useCallback } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from './Gallery'


const Mosaique = ({ photos }: Mosaique): JSX.Element => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback(
    (imgSrc) => {
      const index = photos.findIndex((photo) => photo === imgSrc)
      setCurrentImage(index)
      setViewerIsOpen(true)
    },
    [photos],
  )

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((photo) => ({
                srcset: '',
                source: photo,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}

export default Mosaique
