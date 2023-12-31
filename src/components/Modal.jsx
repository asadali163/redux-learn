import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";
const Modal = () => {
  const dispatch = useDispatch();
  const clearAll = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shipping cart?</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" onClick={clearAll}>
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
