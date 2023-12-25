import React from "react";

type IconButtonProps = {
  icon: string;
  alt: string;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, alt }) => (
  <button>
    <img src={icon} alt={alt} />
  </button>
);

const QRActionButtons: React.FC = () => (
  <div className="flex justify-between gap-2">
    <IconButton icon="/icons/qr/eye.svg" alt="qr code icon" />
    <IconButton icon="/icons/qr/share.svg" alt="qr code icon" />
    <IconButton icon="/icons/qr/download.svg" alt="qr code icon" />
  </div>
);

export default QRActionButtons;
