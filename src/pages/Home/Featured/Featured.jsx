import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-iten mb-10 bg-fixed text-white">
            <SectionTitle subHeading={"Check it out"}heading={"featured item"}/>
            <div className="md:flex justify-center items-center py-8 px-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <h4 className="uppercase">Where can i get some?</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem nemo delectus quaerat unde ullam inventore facilis similique doloribus aperiam vero voluptatibus nobis aliquam labore, adipisci, a illum earum corporis magni, soluta provident! Quasi quos non vitae, officiis exercitationem omnis reiciendis dicta et sequi, accusamus, aspernatur obcaecati suscipit voluptatum dolores. </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;