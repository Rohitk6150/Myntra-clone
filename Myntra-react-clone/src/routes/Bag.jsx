import BagSummary from "../components/BagSummary"
import BagItem from "../components/BagItem";
import {useSelector} from "react-redux"

function Bag(){

  const bagItems = useSelector(state => state.bag);
  const items = useSelector(state => state.items);
const finalItems = items.filter(item =>{
  const  itemIndex = bagItems.indexOf(item.id);
  return itemIndex >= 0;
})

  return(
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item => <BagItem item={item}></BagItem>)}
          
        </div>
        <BagSummary></BagSummary>
        <div className="bag-summary">
        </div>
      </div>
    </main>
    );
};

export default Bag;