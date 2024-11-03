const statusText = (key, text) => {
  let textWrapper;
  switch (key) {
    case "status":
      textWrapper =
        text === "pending" ? (
          <span className="text-xs p-2 bg-yellow-400 bg-opacity-10 rounded-lg text-yellow-400">
            {text}
          </span>
        ) : (
          <span className="text-xs p-2 bg-green-400 bg-opacity-10 rounded-lg text-green-400">
            {text}
          </span>
        );

      return textWrapper;

    case "payment":
      textWrapper =
        text === "pending" ? (
          <span className="text-xs p-2 bg-blue-400 bg-opacity-10 rounded-lg text-blue-400">
            {text}
          </span>
        ) : (
          <span className="text-xs p-2 bg-green-400 bg-opacity-10 rounded-lg text-green-400">
            {text}
          </span>
        );

      return textWrapper;
    case "shipping":
      textWrapper =
        text === true ? (
          <span className="text-xs p-2 bg-green-400 bg-opacity-10 rounded-lg text-green-400">
            Fulfilled
          </span>
        ) : (
          <span className="text-xs p-2 bg-red-400 bg-opacity-10 rounded-lg text-red-400">
            Unfulfilled
          </span>
        );
      return textWrapper;

    case "published":
      textWrapper =
        text === true ? (
          <span className="text-xs p-2 bg-green-400 bg-opacity-10 rounded-lg text-green-400">
            Published
          </span>
        ) : (
          <span className="text-xs p-2 bg-red-400 bg-opacity-10 rounded-lg text-red-400">
            Unpublished
          </span>
        );
      return textWrapper;
    default:
      break;
  }
};

export default statusText;
