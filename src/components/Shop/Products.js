import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMYDATA = [
  {
    id: "q1",
    title: "A Book",
    price: 5,
    description: "This is a first product - amazing!",
  },
  {
    id: "q2",
    title: "A Bick",
    price: 10,
    description: "This is a first Bike - amazing!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYDATA.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
