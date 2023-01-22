import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/products/actions";
import "./Body.css";
import Carousel from "react-simply-carousel";
const Body = () => {
  const styles = useSelector((store) => store.styles);
  const Products = useSelector((store) => store.products);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  var style = {
    width: "80%",
    height: "100vh",
    padding: "50px 0",
    color: styles.color,
  };

  return (
    <div style={style}>
      {/* Table  */}
      <h2>Products Table</h2>
      <div id="tab">
        {Products.loading ? (
          <h2>Fetching Data...</h2>
        ) : (
          <TableContent data={Products.data} />
        )}
      </div>
      {/* carousel  */}
      <br />
      <h2>Cards Section</h2>
      <div id="card-container">
        {Products.loading ? (
          <h2>Fetching Data...</h2>
        ) : (
          <CardsContent carousel={styles.carousel} activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} data={Products.data} />
        )}
      </div>
    </div>
  );
};

export default Body;

function TableContent({ data }) {
  return (
    <table width={"100%"}>
      <thead>
        <tr>
          <th>IMAGE</th>
          <th>TITLE</th>
          <th>PRICE</th>
          <th>CATEGORY</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((product) => {
          return (
            <tr key={product.id} className="tableItem">
              <td>
                <img width={"80px"} src={product.image} alt="" />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function CardsContent({ data, carousel, activeSlideIndex ,setActiveSlideIndex}) {
  console.log(carousel);
  let section = (
    <>
      {data.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </>
  );
  return (
    <>
      {carousel == "true" ? (
        <Carousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={3}
          itemsToScroll={3}
          autoplay={true}
        >
          {section}
        </Carousel>
      ) : (
        <div id="cardsSection">{section}</div>
      )}
    </>
  );
}

function Card({ product }) {
  return (
    <div>
      <img width={"60px"} src={product.image} />
      <br />
      <p>{product.category}</p>
      <p>{product.price}</p>
    </div>
  );
}
