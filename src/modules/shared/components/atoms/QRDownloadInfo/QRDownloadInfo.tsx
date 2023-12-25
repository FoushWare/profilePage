type InfoWithIconProps = {
  icon: string;
  text: string;
};

const InfoWithIcon: React.FC<InfoWithIconProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center rounded-lg bg-[#fdf5e9] p-3">
      <img src={icon} alt="icon" className="w-6 h-6 mr-2" />
      <p>{text}</p>
    </div>
  );
};

export default InfoWithIcon;
