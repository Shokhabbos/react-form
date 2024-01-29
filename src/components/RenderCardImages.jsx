export const RenderCardImages = ({ creditCardType }) => {
  const cardImages = [
    {
      type: "MasterCard",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg",
    },
    {
      type: "Visa",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1920px-Visa_2021.svg.png",
    },
    {
      type: "Amex",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/641px-American_Express_logo_%282018%29.svg.png",
    },
    {
      type: "maestro",
      src: "https://www.freevector.com/uploads/vector/preview/1517/FreeVector-Maestro.jpg",
    },
  ];

  return (
    <div className="mt-2 flex space-x-4">
      {cardImages.map((card) => (
        <img
          key={card.type}
          src={card.src}
          alt={card.type}
          className={`h-8 ${
            creditCardType === card.type.toLowerCase()
              ? "opacity-100"
              : "opacity-30"
          }`}
        />
      ))}
    </div>
  );
};
