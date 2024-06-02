import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "./Components/featured/Featured";
import Menu from "./Components/menu/Menu";
import CategoryList from "./Components/categoryList/CategoryList";
import CardList from "./Components/cardlist/CardList";


export default function Home() {
  return <div>

    <Featured />
  
    <CategoryList />
    <CardList />
      <Menu />
    
   
main
  </div>;
}
