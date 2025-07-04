import { Helmet } from "react-helmet-async";
import Container from "../../globalComponents/Container";
import LeftProductComponents from './components/LeftProductComponents'
import RightProductComponents from './components/RightProductComponents'
import Subscribe from './components/subscribe'

const Products = () => {
  return (
    <>
     <Helmet>
        <title>Product</title>
      </Helmet>
      <Container>
        <div className="grid grid-cols-[1fr_3.8fr] gap-x-4 mt-[64px]">
          <LeftProductComponents />
          <RightProductComponents />
        </div>
        <div>
          <Subscribe />
        </div>
      </Container>
    </>
  )
}

export default Products;