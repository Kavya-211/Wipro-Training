import Card from "./Card";

const Courses = () => {
  return (
    <section className="products">
      <h2>Sale Products</h2>

      <div className="product-grid">
        {/* 1. Mens Shoes */}
        <Card
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          title="Mens Shoes"
        />

        {/* 2. Men Jacket */}
        <Card
          image="https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
          title="T Shirt 705"
        />

        {/* 3. camera (FIXED IMAGE) */}
        <Card
          image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500"
          title="Camera"
        />

        {/* 4. Hat */}
        <Card
          image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          title="Dresses"
        />
      </div>
    </section>
  );
};

export default Courses;