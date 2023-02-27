import Item from "./Items";
import Table from "./Table";
const Home = () => {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Item />
        <Table />
      </div>
    );
  };
  
  export default Home;