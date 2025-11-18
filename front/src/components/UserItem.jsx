import React, { useEffect, useState } from 'react';
import { getItemList } from '../api/userItem';
import { submitDonation } from '../api/donation';

function UserItem() {
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [quantity, setQuantity] = useState(0);

  const loginId = 1;
  const characterId = 1;

  useEffect(() => {
    getItemList(loginId).then((data) => {
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
                  <li className="" key={index}>
                    {item.name} Exp： {item.exp} 個数： {item.quantity}
                    <button
                      className="item-button"
                      onClick={() => {
                        setSelectedItem(itemList[index]);
                      }}
                    >
                      使う
                    </button>
                    {selectedItem.id === itemList[index].id && (
                      <>
                        <>
                          個数選択：
                          {quantity} 個
                          <button
                            onClick={() =>
                              setQuantity((quantity) => {
                                return quantity < selectedItem.quantity
                                  ? quantity + 1
                                  : quantity;
                              })
                            }
                          >
                            +
                          </button>
                          <button
                            onClick={() =>
                              setQuantity((quantity) => {
                                return quantity > 0 ? quantity - 1 : quantity;
                              })
                            }
                          >
                            -
                          </button>
                        </>
                        <button
                          className="item-button"
                          onClick={() => {
                            submitDonation(
                              loginId,
                              characterId,
                              selectedItem,
                              quantity
                            );
                            setSelectedItem({});
                            setQuantity(0);
                          }}
                        >
                          OK
                        </button>
                        <button
                          className="item-button"
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
