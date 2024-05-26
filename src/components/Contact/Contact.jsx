import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const dispathOnClick = () =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Successfully deleted!", {
          style: {
            backgroundColor: "white",
            color: "black",
          },
        });
      })
      .catch((error) => {
        toast.error(`Failed to delete contact: ${error.message}`, {
          style: {
            backgroundColor: "white",
            color: "black",
          },
        });
      });
  return (
    <div>
      <Toaster />
      <li style={{ listStyle: "none" }}>
        <div className={css.listItem}>
          <div className={css.info}>
            <p>
              <FaUser style={{ paddingRight: "20px" }} />
              {name}
            </p>
            <p>
              <FaPhoneAlt style={{ paddingRight: "20px" }} />
              {number}
            </p>
            <a href={`tel:+${number}`}></a>
          </div>
          <button
            className={css.button}
            id={id}
            type="button"
            onClick={dispathOnClick}
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
}
