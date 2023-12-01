import { CCarousel, CCarouselCaption, CCarouselItem, CImage  } from '@coreui/react'
import { useEffect, useState } from 'react'


export default function CarouselView(props) {
  const [items,setitems] = useState([])

  useEffect(() => {
    let list = props.all.map((item,ind) => {

      return (
        <CCarouselItem key={item.id}>
          <CImage className="d-block w-100" src={item.image} alt="slide 1" />
          <CCarouselCaption style={{backdropFilter: 'blur(10px)'}} className=" d-md-block">
            <h1>{item.title}</h1>
            <p style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxHeight: '4.5em'
              }}>{item.description}</p>
          </CCarouselCaption>
        </CCarouselItem>
      )
    })

    setitems(list)
    
  }, [props.all]);

  return (
    <>
    <h5>You might like...</h5>
    <CCarousel controls indicators dark={false}>
      {items}
    </CCarousel>
    </>

  )
}