import { useState } from "react";
import { Link } from "react-router";

function AddPaintingForm({ onAddPainting }) {
  const [formValues, setFormValues] = useState({
    title: "",
    artist: "",
    medium: "",
    description: "",
    image: "",
    alt: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};
    if (!formValues.title.trim()) newErrors.title = "Title is required.";
    if (!formValues.artist.trim()) newErrors.artist = "Artist is required.";
    if (!formValues.medium.trim()) newErrors.medium = "Medium is required.";
    if (!formValues.description.trim())
      newErrors.description = "Description is required.";
    if (!formValues.image.trim()) newErrors.image = "Image URL is required.";
    if (!formValues.alt.trim()) newErrors.alt = "Alt text is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddPainting({
      id: Date.now(),
      title: formValues.title,
      artist: formValues.artist,
      image: formValues.image,
      medium: formValues.medium,
      description: formValues.description,
      alt: formValues.alt,
    });

    setFormValues({
      title: "",
      artist: "",
      medium: "",
      description: "",
      image: "",
      alt: "",
    });
    setErrors({});
  }

  return (
    <section>
      <Link to="/">Back to Gallery</Link>
      <h2>Add a Painting</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
          {errors.title && <p>{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={formValues.artist}
            onChange={handleChange}
          />
          {errors.artist && <p>{errors.artist}</p>}
        </div>

        <div>
          <label htmlFor="medium">Medium</label>
          <input
            type="text"
            id="medium"
            name="medium"
            value={formValues.medium}
            onChange={handleChange}
          />
          {errors.medium && <p>{errors.medium}</p>}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>

        <div>
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formValues.image}
            onChange={handleChange}
          />
          {errors.image && <p>{errors.image}</p>}
        </div>

        <div>
          <label htmlFor="alt">Alt Text</label>
          <input
            type="text"
            id="alt"
            name="alt"
            value={formValues.alt}
            onChange={handleChange}
          />
          {errors.alt && <p>{errors.alt}</p>}
        </div>

        <button type="submit">Add Painting</button>
      </form>
    </section>
  );
}

export default AddPaintingForm;
