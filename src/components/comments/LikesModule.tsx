function LikesModule({ likes }: { likes: number }) {
  return (
    <div className="bg-userVeryLightGrey flex h-full items-center rounded-lg sm:flex-col">
      <button
        type="button"
        className="text-userPrimaryVariant px-4 py-2 font-medium"
      >
        +
      </button>
      <span className="text-userPrimary font-medium">{likes}</span>
      <button
        type="button"
        className="text-userPrimaryVariant px-4 py-2 font-medium"
      >
        -
      </button>
    </div>
  );
}

export default LikesModule;
