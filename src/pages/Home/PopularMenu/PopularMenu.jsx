/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle 
      subHeading={"Popular Items"} 
      heading={"from our menu"} />
      <div className="grid md:grid-cols-2 gap-4 mb-7">
        {
        menu.map(item => <MenuItems 
        key={Math.random}
        item={item}
        />)
        }   
        </div>
        <button className="btn btn-outline border-0 border-b-4 mt-4">View full menu</button>
    </section>
  );
};

export default PopularMenu;
