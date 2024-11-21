function WhatsappButton() {
  const handleWhatsappClick = () => {
    window.open("https://wa.me/971558462124", "_blank");
  };

  return (
    <div>
      <button
        onClick={handleWhatsappClick}
        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd59] text-white px-6 py-3 rounded-md font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
          alt="whatsapp"
          className="w-5 h-5"
        />
        <span>Whatsapp</span>
      </button>
    </div>
  );
}

export default WhatsappButton;
