import { useState } from "react";

function ManageGallery({ paintings, onDeletePainting }) {
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
              <button type="button" onClick={() => setPaintingToDelete(painting)}>
                Remove Painting
              </button>
            </li>
          ))}
        </ul>
      )}

      {paintingToDelete && (
        <section aria-labelledby="delete-confirmation-title">
          <h2 id="delete-confirmation-title">Remove Painting</h2>
          <p>Remove {paintingToDelete.title} from the gallery?</p>
          <button type="button" onClick={() => setPaintingToDelete(null)}>
            Cancel
          </button>
          <button type="button" onClick={confirmDelete}>
            Delete
          </button>
        </section>
      )}
    </section>
  );
}

export default ManageGallery;
