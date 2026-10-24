import { useState } from "react";
import { ChevronDown, PawPrint } from "lucide-react";

export default function PersonalPhotos() {
  const [open, setOpen] = useState(false);

  return (
    <details
      className="personal-photos"
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary>
        <PawPrint size={15} strokeWidth={1.5} aria-hidden="true" />
        <span>My favorite dogs</span>
        <ChevronDown size={14} aria-hidden="true" />
      </summary>
      {open && (
        <div className="personal-photo-grid">
          <img
            src="/assets/favorite-dogs-01.webp"
            alt="A playful portrait with a dog-face filter"
            width="363"
            height="539"
          />
          <img
            src="/assets/favorite-dogs-02.webp"
            alt="A photo collage of a dog and a person wearing glasses"
            width="960"
            height="1692"
          />
        </div>
      )}
    </details>
  );
}
