import React from 'react';
import Trash from '../../../assets/Icons/Trash/Trash';
import '../Buttons.css';

const TrashAllItems = () => {
	return (
    <div className="btncontainer trashcontainer">
      <button className="trashallitems">Remove All Items <Trash /></button>
    </div>
	)
};

export default TrashAllItems;
