import React, { useEffect, useState } from 'react';
import { getItemList } from '../api/userItem';

function UserItem() {
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    getItemList(1).then((data) => {
      setItemList(data);
    });
  }, []);

  return (
    <div>
      {itemList.length ? (
        <>
          <p>所持アイテム</p>
          <div className="item-list">
            <ul>
              {itemList.map((item, index) => {
                return (
                  <li
                    className="item"
                    key={index}
                    onClick={() => {
                      setSelectedItem(itemList[index]);
                    }}
                  >
                    {item.name} Exp: {item.exp} 個数: {item.quantity}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <p>アイテムなし</p>
      )}
    </div>
  );
}

export default UserItem;
