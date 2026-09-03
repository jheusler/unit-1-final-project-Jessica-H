import { useState } from "react";
import Button from "./Button.jsx";

function ManageGallery({ paintings, onDeletePainting }) {
  // Holds the painting pending removal so an in-app confirmation shows first
  const [paintingToDelete, setPaintingToDelete] = useState(null);

  function confirmDelete() {
    onDeletePainting(paintingToDelete.id);
    setPaintingToDelete(null);
  }

  return (
    <section>
      <h1>Manage Gallery</h1>

      {paintings.length === 0 ? (
        <p>No paintings are currently available.</p>
      ) : (
        <ul>
          {paintings.map((painting) => (
            <li key={painting.id}>
              {painting.title}{" "}
              <Button type="button" onClick={() => setPaintingToDelete(painting)}>
                Remove Painting
              </Button>
            </li>
          ))}
        </ul>
      )}

      {paintingToDelete && (
        <section aria-labelledby="delete-confirmation-title">
          <h2 id="delete-confirmation-title">Remove Painting</h2>
          <p>Remove {paintingToDelete.title} from the gallery?</p>
          <Button type="button" onClick={() => setPaintingToDelete(null)}>
            Cancel
          </Button>
          <Button type="button" onClick={confirmDelete}>
            Delete
          </Button>
        </section>
      )}
    </section>
  );
}

export default ManageGallery;
