import './ExpenseForm.css';
const ExpenseForm = () =>{
    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-forms'>
                    <label>Title</label>
                    <input type='text'></input>

                </div>
                <div className="new-forms">
                    <label>date</label>
                    <input type='date' min='2000-01-01' max='2023-12-12'></input>

                </div>
                <div className='new-forms'>
                    <label>amount</label>
                    <input type='number' min='2000' max='100000'></input>
                </div>

            </div>
            <div className='new-submit'>
                <button type='submit'>submit</button>
            </div>
        </form>
    );
};
export default ExpenseForm;