import React, { useEffect, useState } from 'react';
import { getItemList } from '../api/userItem';
import { submitDonation } from '../api/donation';

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
                  <li className="item" key={index}>
                    {item.name} Exp: {item.exp} 個数: {item.quantity}
                    <button
                      className="item"
                      onClick={() => {
                        setSelectedItem(itemList[index]);
                      }}
                    >
                      使う
                    </button>
                    {selectedItem.id === itemList[index].id && (
                      <>
                        個数選択
                        <button
                          onClick={() => {
                            submitDonation();
                          }}
                        >
                          OK
                        </button>
                        <button
                          onClick={() => {
                            setSelectedItem({});
                          }}
                        >
                          キャンセル
                        </button>
                      </>
                    )}
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
