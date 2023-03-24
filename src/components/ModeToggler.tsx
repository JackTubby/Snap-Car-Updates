import { useTheme } from "next-themes";

const ModeToggler = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="absolute right-20  bottom-20 p-3 h-12 w-12 order-2 md:order-3 dark:text-white"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Toggle
      </button>
    </>
  );
};

export default ModeToggler;
