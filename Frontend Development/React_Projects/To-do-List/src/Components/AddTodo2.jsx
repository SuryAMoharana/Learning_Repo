function AddTodo2() {
  let milk = "Buy Milk";
  let date = "4/10/2023";

  return (
    <div class="container">
      <div class="row rows">
        <div class="col-6">{milk}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo2;
