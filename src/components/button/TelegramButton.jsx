function TelegramButton() {
  const handleTelegramClick = () => {
    window.open("https://t.me/+971558462124", "_blank");
  };

  return (
    <div>
      <button
        onClick={handleTelegramClick}
        className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b3] text-white px-6 py-3 rounded-md font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
          alt="telegram"
          className="w-5 h-5"
        />
        <span>Telegram</span>
      </button>
    </div>
  );
}

export default TelegramButton;
