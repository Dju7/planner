import {useState, useEffect} from 'react'



function TodoElement() {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
  
    useEffect(() => {
        const storedTask = Object.keys(localStorage)
          .filter((key) => key.startsWith('task_'))
          .map((key) => ({ id: parseInt(key.replace('task_', '')), value: localStorage.getItem(key)}));
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
      };
      setItems((prevItems) => [...prevItems, newTask]); 
      localStorage.setItem(`task_${newTask.id}`, newTask.value);
      setNewItem(""); 
    }
  
    const deleteItem = (id) => {
      const newArray = items.filter((item) => item.id !== id);
      setItems(newArray);
      localStorage.removeItem(`task_${id}`);
    };
  
  
    return (
      <section className='w-full lg:w-[50%] min-h-[70vh] flex justify-center items-center mt-4 border'>
        <div className='w-full min-h-[70vh]  shadow-lg shadow-blue-400 rounded-xl border border-blue-500'>
          <div className='w-full h-36 flex flex-col justify-center items-center gap-2 mt-4'>
            <h2 className='text-3xl text-blue-500'>TODO LIST</h2>
            <input 
            type="text" 
            placeholder="Enter a task" 
            className='w-[70%] text-black h-10 p-2 mt-2 rounded-xl bg-blue-100/70 placeholder-blue-400 border border-blue-500'
            value={newItem || ''}
            onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit" 
            className='mt-2 w-44 bg-blue-500 text-white  p-2 rounded-xl'
            onClick={() => addItem()}
            >Add Task</button>
          </div>
          <div className='flex flex-col justify-center items-center h-auto w-full overflow-auto '>
          <ul className="mt-6 text-white w-full flex flex-col justify-center items-center">
            {items.map((item) => (
              <li key={item.id} className=' w-[90%] p-2 flex justify-between items-center bg-blue-500 text-lg md:text-2xl mt-4 text-white rounded-xl shadow-xl mb-2'>
                {item.value}{" "}
                <button
                  className="ml-5 cursor-pointer bg-secondary text-lg md:text-2xl text-white px-2 rounded-xl"
                  onClick={() => deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          </div>
  
        </div>
        
      </section>
    )
  
  
}

export default TodoElement