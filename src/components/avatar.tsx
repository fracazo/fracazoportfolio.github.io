/** The hero avatar: a still photo in a 60px circle. */
export function Avatar() {
  return (
    <img
      src="/images/avatar.png"
      alt="Alex Fracazo"
      width={60}
      height={60}
      className="mt-24 mb-8 block h-[60px] w-[60px] rounded-full object-cover max-md:mt-14"
    />
  );
}
