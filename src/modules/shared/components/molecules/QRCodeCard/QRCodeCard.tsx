import React, { useState } from "react";
import QRCode from "qrcode.react"; // You need to install this package
import QRDownloadInfo from "../../atoms/QRDownloadInfo/QRDownloadInfo";
import NavLogo from "../../atoms/logo/Logo";

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
          <button>
            <img src="/icons/qr/eye.svg" alt="qr code icon" />
          </button>
          <button>
            <img src="/icons/qr/share.svg" alt="qr code icon" />
          </button>
          <button>
            <img src="/icons/qr/download.svg" alt="qr code icon" />
          </button>
          <button onClick={() => setIsFolded(!isFolded)}>
            <div className="rounded-full bg-[#FBE7EE] p-1">
              {isFolded ? (
                <img src="/icons/qr/fold.svg" alt="qr code icon" />
              ) : (
                <img src="/icons/qr/unfold.svg" alt="qr code icon" />
              )}
            </div>
          </button>
          {/* Add other action icons here */}
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
          <div className="mt-4 flex flex-col items-center  rounded-3xl bg-gradient-to-r from-red-500 to-orange-500 p-3">
            <div className="bg-white rounded-3xl p-1 w-full flex flex-col items-center gap-3">
              <NavLogo classes="w-40" />
              <p className="text-2xl font-Nunito font-bold">{name}</p>
              <QRCode value={qrValue} />
              <p className="text-[#363333] text-base font-Nunito">
                Follow Us On Mazady
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QRCodeCard;
