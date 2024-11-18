export default function AppMain(){
    return (
        <main>
            <h1>Todolist</h1>
      <form>
        <div className='mb-3'>
          <label htmlFor="task" className='form-control'></label>

          <div className='input-group mb-3'>
            <input type="text" className='form-control' placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby='button-addon2'/>
            <button className='btn btn-outline-secondary' type='button' id='button-addon2'>Button</button>
          </div>

          <small id='taskHelperId' className='form-text text-muted'>Type your new task</small>
        </div>
      </form>

      <ul className='list-group list-group-numbered'>
        <li className='list-group-item'>Active item</li>
        <li className='list-group-item'>Item</li>
        <li className='list-group-item'>Disabled item</li>
      </ul>
        </main>
    );
}