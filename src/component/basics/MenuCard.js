import React from 'react'

export const MenuCard = ({menuData}) => {

    return (
        <><h1>welcome to my resturant </h1>


{
    menuData.map((curElem) => { 
      return (  
          <>
        
            <div className="Card-container" key={curElem.id}> 
                <div className="Card">
                    <div className="Card-body">
                        <span className="Card-number card-circle subtle">{curElem.id}</span>
                        <h2 className="Card-title"> {curElem.name} </h2> 
                        <span className="Card-description">{curElem.decription}</span><br/>
                        <img src={curElem.image} alt="maggi" className="media" /><br></br>
                        <span className="Card-price">$10</span>
                        <span >order now</span>
                    </div>
                </div>
                </div>
              </>
              );
    })
}
</>
)

}

export default MenuCard;
