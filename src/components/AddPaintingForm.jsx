import { useState } from "react";
import { Link } from "react-router";

const MEDIUM_OPTIONS = [
  "Watercolor on paper",
  "Gouache on paper",
  "Ink and watercolor",
  "Mixed media",
];

const CURRENT_YEAR = new Date().getFullYear();

function AddPaintingForm({ onAddPainting }) {
  const [formValues, setFormValues] = useState({
    title: "",
    artist: "",
    year: "",
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

    // Validate every field before adding the painting; collect all errors at once
    const newErrors = {};
    if (!formValues.title.trim()) newErrors.title = "Title is required.";
    if (!formValues.artist.trim()) newErrors.artist = "Artist is required.";
    if (!formValues.year) {
      newErrors.year = "Year is required.";
    } else if (formValues.year < 1900 || formValues.year > CURRENT_YEAR) {
      newErrors.year = `Year must be between 1900 and ${CURRENT_YEAR}.`;
    }
    if (!formValues.medium) newErrors.medium = "Medium is required.";
    if (!formValues.description.trim())
      newErrors.description = "Description is required.";
    if (!formValues.image.trim()) {
      newErrors.image = "Image URL is required.";
    } else if (!formValues.image.startsWith("/") && !/^https?:\/\//.test(formValues.image)) {
      newErrors.image = "Image URL must start with / or http(s)://";
    }
    if (!formValues.alt.trim()) newErrors.alt = "Alt text is required.";

    // Stop here if any field failed validation
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddPainting({
      id: Date.now(),
      title: formValues.title,
      artist: formValues.artist,
      year: Number(formValues.year),
      image: formValues.image,
      medium: formValues.medium,
      description: formValues.description,
      alt: formValues.alt,
    });

    setFormValues({
      title: "",
      artist: "",
      year: "",
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
      <h1>Add a Painting</h1>
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
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            min="1900"
            max={CURRENT_YEAR}
            value={formValues.year}
            onChange={handleChange}
          />
          {errors.year && <p>{errors.year}</p>}
        </div>

        <div>
          <label htmlFor="medium">Medium</label>
          <select
            id="medium"
            name="medium"
            value={formValues.medium}
            onChange={handleChange}
          >
            <option value="">Select a medium</option>
            {MEDIUM_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
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
            placeholder="/images/example.jpg"
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
