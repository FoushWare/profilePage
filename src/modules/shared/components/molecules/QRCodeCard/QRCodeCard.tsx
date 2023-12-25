import React, { useState } from "react";
import QRDownloadInfo from "../../atoms/QRDownloadInfo/QRDownloadInfo";
import QRActionButtons from "../QRActionButtons/QRActionButtons";
import FoldButton from "../../atoms/Buttons/FoldButton/FoldButton";
import QRImage from "@/modules/shared/components/molecules/QRImage/QRImage";

type QRCodeCardProps = {
  name: string;
  qrValue: string;
};

const QRCodeCard: React.FC<QRCodeCardProps> = ({ name, qrValue }) => {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div className="border p-4 rounded-3xl bg-white mt-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold font-Nunito text-2xl">QR Code</h2>
        <div className="flex gap-3">
          <QRActionButtons />
          <FoldButton
            isFolded={isFolded}
            onToggle={() => setIsFolded(!isFolded)}
          />
        </div>
      </div>
      {!isFolded && (
        <>
          <div className="mt-4">
            <QRDownloadInfo
              icon="/icons/qr/document-download.svg"
              text="Download the QR Code or share it with your friends"
            />
          </div>
          <QRImage
            name="Hala Ahmed"
            qrValue="https://www.youtube.com/watch?v=7XUibDY0t9o"
          />
        </>
      )}
    </div>
  );
};

export default QRCodeCard;
