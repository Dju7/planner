import { useState, useEffect } from 'react';

function TodoElement1() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // Load tasks and their checked states from localStorage on mount
  useEffect(() => {
    const storedTask = Object.keys(localStorage)
      .filter((key) => key.startsWith('task1_'))
      .map((key) => {
        const data = JSON.parse(localStorage.getItem(key));
        return { id: parseInt(key.replace('task1_', '')), value: data.value, checked: data.checked };
      });
    setItems(storedTask);
  }, []);

  const addItem = () => {
    if (!newItem) {
      alert("You have to add an item");
      return;
    }
    const newTask = {
      id: Math.floor(Math.random() * 100),
      value: newItem,
      checked: false, // Default unchecked
    };
    setItems((prevItems) => [...prevItems, newTask]); 
    localStorage.setItem(`task1_${newTask.id}`, JSON.stringify(newTask)); // Store both value and checked state
    setNewItem(""); 
  }

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
    localStorage.removeItem(`task1_${id}`);
  };

  const toggleCheckbox = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, checked: !item.checked };
        localStorage.setItem(`task1_${item.id}`, JSON.stringify(updatedItem)); // Update localStorage
        return updatedItem;
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <section className='w-full lg:w-[50%] min-h-[70vh] flex justify-center items-center mt-4'>
      <div className='w-full min-h-[70vh] shadow-lg shadow-blue-400 rounded-xl border border-blue-500 '>
        <div className='w-full h-36 flex flex-col justify-center items-center gap-2 mt-4'>
          <h2 className='text-3xl text-blue-500'>GOAL</h2>
          <input 
            type="text" 
            placeholder="Enter a Goal" 
            className='w-[70%] text-black bg-blue-100 placeholder-blue-400 h-10 p-2 mt-2 rounded-xl border border-blue-500'
            value={newItem || ''}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button 
            type="submit" 
            className='mt-2 w-44 bg-blue-500 text-white p-2 rounded-xl'
            onClick={addItem}
          >Add Goal</button>
        </div>
        <div className='flex flex-col justify-center items-center h-auto w-full '>
          <ul className="mt-6 text-white w-full flex flex-col justify-center items-center">
            {items.map((item) => (
              <li 
                key={item.id} 
                className='w-[90%] p-2 flex justify-between bg-red-400 text-2xl text-white shadow-xl mt-4 rounded-xl mb-2'
              >
                {item.value}
                <div>
                <label className='mr-2'>Complete</label>
                  <input 
                  className='h-[20px] w-[20px] border border-white'
                    type="checkbox" 
                    checked={item.checked} 
                    onChange={() => toggleCheckbox(item.id)}
                  />               
                  <button
                    className="ml-5 cursor-pointer px-2"
                    onClick={() => deleteItem(item.id)}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TodoElement1;