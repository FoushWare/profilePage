import React, { useState } from "react";

type FoldButtonProps = {
  isFolded: boolean;
  onToggle: () => void;
};

const FoldButton: React.FC<FoldButtonProps> = ({ isFolded, onToggle }) => (
  <button onClick={onToggle}>
    <div className="rounded-full bg-[#FBE7EE] p-1">
      {isFolded ? (
        <img src="/icons/qr/fold.svg" alt="qr code icon" />
      ) : (
        <img src="/icons/qr/unfold.svg" alt="qr code icon" />
      )}
    </div>
  </button>
);

export default FoldButton;
