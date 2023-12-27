import React from "react";
import QRCode from "qrcode.react"; // You need to install this package
import Logo from "@/modules/shared/components/atoms/logo/Logo";
import { QRImageProps } from "./types";

const QRImage: React.FC<QRImageProps> = ({ name, qrValue }) => (
  <div className="mt-4 flex flex-col items-center rounded-3xl bg-gradient-to-r from-red-500 to-orange-500 p-3">
    <div className="bg-white rounded-3xl p-1 w-full flex flex-col items-center gap-3">
      <Logo classes="w-40" />
      <p className="text-2xl font-Nunito font-bold">{name}</p>
      <QRCode value={qrValue} />
      <p className="text-[#363333] text-base font-Nunito">
        Follow Us On Mazady
      </p>
    </div>
  </div>
);

export default QRImage;
